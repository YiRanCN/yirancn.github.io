### Docker网络模式

参考 https://docs.docker.com/engine/network/drivers/bridge/

- 桥接模式，默认模式，bridge模式，不会占用实际的物理网络IP
- 主机模式，host模式
- Macvlan模式，会占用实际的物理网络IP，底层是模拟出MAC地址
- 无网模式
- Overlay模式，覆盖模式，默认Vxlan实现，跨主机模式
- IPvlan，IPvlan 是一种类似于 Macvlan 的网络模式，它也允许容器直接连接到主机的物理网络。不过，与 Macvlan 不同的是，IPvlan 在同一个物理网络接口上可以有多个虚拟网络接口，这些虚拟网络接口共享同一个 MAC 地址，但拥有不同的 IP 地址。

### Macvlan和IPvlan

Macvlan 和 IPvlan 都可以让容器直接连接到主机的物理网络，使容器能够从物理网络的网段中获取 IP 地址。这与 Bridge 网络模式（容器通过 Docker 创建的虚拟网桥连接到物理网络）不同，它们提供了一种更直接的方式让容器融入物理网络环境。

两种模式在一些需要容器直接与物理网络设备交互的场景中都很有用。例如，在物联网场景下，容器可能需要和物理的传感器、智能设备等进行通信，Macvlan 和 IPvlan 都能很好地满足这种需求，因为它们使容器在网络中的表现更像是物理主机，而不是被隔离在 Docker 内部网络中的对象。

相较于 Bridge 网络模式，Macvlan 和 IPvlan 在网络性能方面都有一定优势。由于它们减少了像 Bridge 网络中虚拟网桥对数据包的转发环节，在对网络性能要求较高的场景下，能够降低网络延迟，提高数据传输效率。

IPvlan 有 L2 和 L3（Layer 3）两种模式。在 L2 模式下，容器和物理网络接口处于同一广播域，类似于 Macvlan；但在 L3 模式下，容器和物理网络接口不在同一广播域，容器无法直接接收广播数据包。L3 模式提供了更好的网络隔离性，适合在需要对容器网络进行分层隔离的场景中使用，如多租户容器平台。