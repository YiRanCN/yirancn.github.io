### 概述

定义与功能：Keepalived 是一个基于 VRRP（Virtual Router Redundancy Protocol，虚拟路由器冗余协议）实现的高可用解决方案。它的主要功能是通过在多台服务器之间共享一个虚拟 IP 地址，来提供服务器的故障转移和高可用性。当主服务器出现故障时，备份服务器可以快速接管虚拟 IP 地址以及对应的服务，对用户来说，几乎感觉不到服务的中断。例如，在一个 Web 服务器集群中，使用 Keepalived 可以确保用户始终能够访问网站，即使其中一台服务器出现故障。

应用场景：广泛应用于各种需要高可用性的网络服务场景，如 Web 服务器（如 Apache、Nginx）、数据库服务器（如 MySQL）等。在负载均衡集群（如 LVS）中，Keepalived 也常被用于提供负载均衡器的高可用性。比如，在一个电商网站的架构中，为了保证用户能够持续地访问商品信息和进行交易，前端的 Web 服务器和负载均衡器通常会使用 Keepalived 来防止单点故障。

https://www.keepalived.org/

https://www.keepalived.org/download.html