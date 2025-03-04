OpenSSL 是一个强大的开源工具包，主要用于加密、SSL/TLS 协议以及与安全通信相关的各种任务。

https://www.openssl.org/

https://github.com/openssl/openssl

**一、主要功能**

1. **加密和解密**：
   - 支持多种加密算法，如对称加密算法（AES、DES 等）和非对称加密算法（RSA、DSA、ECDSA 等）。
   - 可以对文件、数据进行加密，确保信息的保密性。例如，使用 AES 加密一个文件：`openssl enc -aes-256-cbc -in input.txt -out encrypted.txt`。

2. **数字签名和验证**：
   - 用于生成和验证数字签名，确保数据的完整性和真实性。
   - 可以使用私钥生成数字签名，然后使用相应的公钥进行验证。例如，生成 RSA 密钥对并对文件进行签名：`openssl genrsa -out private.key 2048`，然后`openssl rsautl -sign -inkey private.key -in input.txt -out signature.bin`，最后验证签名：`openssl rsautl -verify -inkey public.key -in signature.bin -pubin`。

3. **SSL/TLS 证书管理**：
   - 生成自签名证书和证书签名请求（CSR）。
   - 可以用于创建服务器和客户端的 SSL/TLS 证书，以确保安全的网络通信。例如，生成自签名证书：`openssl req -new -x509 -days 365 -key private.key -out certificate.pem`。

4. **密码学操作**：
   - 支持哈希函数，如 MD5、SHA-1、SHA-256 等。
   - 可以进行密钥生成、密钥交换等操作。

**二、应用场景**

1. **Web 服务器安全**：为 Web 服务器配置 SSL/TLS 证书，确保用户与服务器之间的通信安全。
2. **数据安全**：在数据传输和存储过程中，使用加密和数字签名来保护敏感信息。
3. **软件开发**：在应用程序中集成加密功能，以提高软件的安全性。
4. **网络安全**：用于分析和测试网络通信的安全性，检测潜在的漏洞。

总之，OpenSSL 是一个非常重要的安全工具，广泛应用于各种领域，为保护信息安全提供了强大的支持。😃


OpenSSL有以下一些主要版本及其特性：

可以使用`openssl version`查看安装的版本

1. **OpenSSL 0.9.x 系列**：
    - 这是早期的版本系列，从1998年开始。对SSL 2.0、SSL 3.0以及TLS 1.0都有支持。
    - 提供了基本的密码学功能，包括多种对称加密算法（如DES、RC4等）、非对称加密算法（如RSA、DH等）以及信息摘要算法（如MD5等）。
    - 为后续版本的发展奠定了基础，但在功能和安全性上相对较早期和基础。
2. **OpenSSL 1.0.x 系列**：
    - **OpenSSL 1.0.0**：被许多Linux系统采用，提供了一些硬件加速的功能，能够加快加密和解密的速度，对于一些对性能要求较高的应用比较重要。
    - **OpenSSL 1.0.1**：是一个使用较为广泛的版本，但在2014年发现了严重的安全漏洞“心脏滴血（Heartbleed）”，该漏洞影响了此版本及之前的部分版本。
    - **OpenSSL 1.0.2**：修复了之前版本中存在的一些漏洞和安全问题，提高了系统的防护能力。在加密算法和处理效率上有所改进，增加了一些新的加密算法和协议支持，为用户提供了更加多样化和灵活的选项。
3. **OpenSSL 1.1.1 系列**：
    - 对之前的版本进行了改进和优化，在性能和安全性方面都有提升。拥有更多的文档和经过测试的代码。
    - 引入了提供者（Provider）概念，提供者聚集在一起并提供可用的算法实现，用户可以以编程方式或通过配置文件指定希望用于任何给定应用程序的提供程序。
    - 弃用了一些不安全或过时的算法和函数，如MD2、DES等加密算法被视为遗留算法，强烈建议不要使用。
4. **OpenSSL 3.0 系列**：
    - 经过长时间的开发和迭代推出，是一个主要版本。大部分使用OpenSSL 1.1.1的应用程序至少需要重新编译才能使用该版本，但大多数应用程序在重新编译后能基本保持正常工作。
    - 采用了Apache License v2许可证，取代了之前的双重OpenSSL和SSLeay许可。
    - 标配5个不同的提供程序，其中包括FIPS提供程序（FIPS验证的加密算法），但默认处于禁用状态，需要显式启用。
    - 弃用了所有低级API，强烈建议用户更新代码以使用高级API，因为不推荐使用的API可能会从未来版本中删除。
    - 引入了许多新概念，如多线程应用、算法获取、编码和解码密钥等，在功能和安全性上有了进一步的提升。

目前，OpenSSL 3.0及以上版本是推荐使用的版本，旧版本（如1.0.x及更早版本）已经不再受支持或存在安全风险。用户应根据自己的需求和应用场景选择合适的OpenSSL版本，并及时进行升级以保证系统的安全性和稳定性。