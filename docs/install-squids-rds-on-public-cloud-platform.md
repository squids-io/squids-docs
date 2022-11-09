# 公有云主机导入 OS 镜像安装

该模式直接使用 OS 镜像导入进行云主机安装，用户仅需简单步骤即可完成 Squids 部署配置

## 一.配置环境要求

支持单机版和三节点高可用集群版部署，配置规格和云网络策略要求如下：

* [单机环境](single-master-requirement.md)
* [高可用集群环境](highly-available-cluster-requirement.md)

## 二.OS镜像获取

- 运行如下命令进行 Squids 软件 OS 镜像介质下载（约 1.9GB）

```
wget https://image.squids.cn/latest/squids-rds-1.0.0.qcow2
```

## 三.启动云主机

- 参考公有云官方文档进行 Squids 软件 OS 镜像导入，启动云主机
    * [阿里云导入自定义镜像](https://help.aliyun.com/document_detail/25464.html)
        * 阿里云导入镜像后的镜像检测可能存在建议优化项，不影响正常使用，阿里云助手等工具可以在启动云主机后进行安装。
    * [华为云导入自定义镜像](https://support.huaweicloud.com/usermanual-ims/zh-cn_topic_0030713191.html)
    * [腾讯云导入自定义镜像](https://cloud.tencent.com/document/product/213/4945)
        * 腾讯云导入方式选择**强制**导入
- 云主机密码
    - ==需采用自定义 root 密码，如进行集群部署，多台云主机密码需保持一致==

## 四.软件部署配置

#### 1.连接云主机

您可以通过 **远程连接工具** 或 **ssh 操作命令** 登陆云主机，OS 镜像默认 root 用户密码为 `SquidsRDS123!`(建议及时修改)

#### 2.执行安装命令

**注意: 无论是单机版本还是高可用版本，仅一台节点执行安装脚本即可**

进入 `/opt/squids/installer` 目录，执行安装脚本 `./install.sh` ，整体预计20-30分钟

![img.png](./img/bash-install.png)

- 配置说明

==需要逐个输入节点的 IP 地址信息，按 q 可跳过节点信息==

| 配置项                 | 说明                           |
|---------------------|------------------------------|
| public ip           | 管理节点公网 IP，用于外部访问             |
| private ip          | 管理节点私网 IP，用于内部互联通信           |
| loadbalancer domain | 集群版需提供网络负载均衡 IP，单机版即为主机公网 IP |
| mail host           | 邮件发送服务器地址/域名，例如 smtp.qq.com  |
| mail username       | 邮件发送账户，用于告警邮件发送              |

## 五.平台访问与授权

#### 访问地址

* 单机环境访问地址为云主机公网 IP 地址
* 多机环境访问地址为负载均衡器公网 IP 地址

#### 授权申请

* 访问正常即可进行使用授权的申请，具体流程可参考 [申请授权](apply-for-authorization.md) 进行操作。

## 六.安装问题与查看

* 云主机节点的 unreachable 及 failed 结果都是 0 则安装过程正常。

  ![img.png](./img/install-finished.png)

* 如果安装过程中出现报错，首先检查输入 IP 信息是否正确，如不正确可进入 `/opt/squids/installer` 文件夹，修改为正确 IP 地址后，再次执行安装脚本。 若 IP 地址经检查正确无误，请联系 [在线客服](#) 进行处理。

### 安装结果检查

1. 执行 `kubectl get pod -A | grep -Ev 'Running|Completed'`查看集群 pod 状态是否就绪，若安装正常，大约 5min 左右所有 pod 状态即可为 Running 或 Completed 状态。可使用该命令检查是否仍存在异常 pod 状态。

   ![img.png](./img/pod-check.png)

2. 如果10分钟以上仍有 非Running/非Completed 的状态，请联系 [在线客服](#) 进行处理。
3. 常见异常状态参考：
    * Pending          : 调度失败，资源不足，或者节点存在 Pod 不能容忍的污点
    * Terminating      : 磁盘空间不足
    * CrashLoopBackOff : Pod 反复拉起后退出登陆，一般是系统配置问题，比如内存资源不足，系统 OOM，cgroup OOM
    * OOMKilled        : 节点内存不足或启动内存有限制
    * Evicted          : 磁盘空间不足
