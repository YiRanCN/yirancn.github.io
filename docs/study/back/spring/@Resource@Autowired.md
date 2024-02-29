@Autowired 和 @Resource 都是用来实现依赖注入的注解（在 Spring/Spring Boot 项目中），但二者却有着 5 点不同：

- 来源不同：@Autowired 来自 Spring 框架，而 @Resource 来自于（Java）JSR-250；
- 依赖查找的顺序不同：@Autowired 先根据类型再根据名称查询，而 @Resource 先根据名称再根据类型查询；
- 支持的参数不同：@Autowired 只支持设置 1 个参数，而 @Resource 支持设置 7 个参数；
- 依赖注入的用法支持不同：@Autowired 既支持构造方法注入，又支持属性注入和 Setter 注入，而 @Resource 只支持属性注入和 Setter 注入；
- 编译器 IDEA 的提示不同：当注入 Mapper 对象时，使用 @Autowired 注解编译器会提示错误，而使用 @Resource 注解则不会提示错误。

### 参考

- [CSDN-@Autowired 和@Resource 到底有什么区别](https://blog.csdn.net/xhbzl/article/details/126765893)
