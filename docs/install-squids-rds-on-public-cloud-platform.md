# 公有云平台基于镜像安装

## 镜像安装包使用

### 镜像安装包获取

* 您可以选择在阿里云、华为云或腾讯云平台完成对Squids的安装部署，进入 [下载中心](http://squids.cn/download) 下载您所需要的镜像安装包。

### 镜像导入云平台

* 您可以按照不同云平台的官方文档进行Squids镜像的导入和使用。
    * [阿里云导入自定义镜像](https://help.aliyun.com/document_detail/25464.html)
    * [华为云导入自定义镜像](https://support.huaweicloud.com/usermanual-ims/zh-cn_topic_0030713191.html)
    * [腾讯云导入自定义镜像](https://cloud.tencent.com/document/product/213/4945)

## 安装部署

### 环境要求

* [单Master环境要求](single-master-requirement.md)
* [高可用Master环境要求](highly-available-cluster-requirement.md)

### 连接云主机

您可以通过 **远程连接工具** 或 **ssh操作命令** 登陆云主机，OS 镜像内置默认用户名为 `root`，密码为 `SquidsRDS123!`（请及时修改默认密码）

### 执行安装命令

**<font color=#FF000 >注意: 无论是单机版本还是高可用版本，仅一台节点执行安装脚本即可</font>**

1. 进入 `/opt/squids/instller` 目录，执行安装脚本。请根据提示，依次输入节点信息以及发件邮箱等必要信息。

   ![img.png](../static/img/bash-install.png)

* 其中单机模式loadbalancer提供为当前云主机的公网IP即可。

2. 开始安装之后，请不要关闭当前窗口（可以最小化），整个安装过程大约会花费20-30分钟左右。

* 云主机节点的unreachable及failed结果都是0则安装过程正常。

  ![img.png](../static/img/install-finished.png)

* 如果安装过程中出现报错，首先检查输入IP信息是否正确，如不正确可进入 `/opt/squids/instller` 文件夹，修改为正确IP地址后，再次执行安装脚本。 若IP地址经检查正确无误，请联系 [在线客服]() 进行处理。

### 安装结果检查

1. 执行 `kubectl get pod -A | grep -Ev 'Running|Completed'`查看集群pod状态是否就绪，若安装正常，大约5min左右所有pod状态即可为Running或Completed状态。可使用该命令检查是否仍存在异常pod状态。

   ![img.png](../static/img/pod-check.png)

   安装成功之后即可正常登陆平台，具体操作可参考 [申请授权](apply-for-authorization.md) 进行功能使用。
2. 如果10分钟以上仍有非Running/非Completed的状态，请联系 [在线客服]() 进行处理。
3. 常见异常状态参考：
    * Pending          : 调度失败，资源不足，或者节点存在Pod不能容忍的污点
    * Terminating      : 磁盘空间不足，Dockerd与containerd状态不同步
    * CrashLoopBackOff : Pod反复拉起后退出登陆，一般是系统配置问题，比如内存资源不足，系统OOM，cgroup OOM
    * OOMKilled        : 节点内存不足或启动内存有限制
    * Evicted          : 磁盘空间不足                                           
