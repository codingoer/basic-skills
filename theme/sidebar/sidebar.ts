export * as java from '../sidebar/java'

module.exports = {
  // Java
  '/java/programing/': require('./java/programing'),
  '/java/oop/': require('./java/oop'),
  '/java/collection/': require('./java/collection'),
  '/java/io/': require('./java/io'),
  '/java/concurrency/': require('./java/concurrency'),
  '/java/dynamic/': require('./java/dynamic'),
  '/jvm/': require('./java/jvm'),
  '/java-ee/':require('./java/javaee'),
  '/jakarta-ee/':require('./java/javaee'),

  // Coding
  '/design-pattern/': require('./coding/design-pattern'),
  '/algorithm/': require('./coding/algorithm'),
  '/data-structure/': require('./coding/data-structure'),
  '/networking/': require('./coding/networking'),
  '/os/': require('./coding/os'),
  '/tools/': require('./coding/tools'),
  '/specification/': require('./coding/specification'),

  // DataBase
  '/database/sql': require('./database/sql'),
  '/database/mysql': require('./database/mysql'),
  '/database/redis': require('./database/redis'),
  '/database/mongodb': require('./database/mongo'),
  '/database/elasticsearch': require('./database/elasticsearch'),

  // Operation
  '/operation/tomcat': require('./operation/tomcat'),
  '/operation/nginx': require('./operation/nginx'),
  '/operation/vmware/': require('./operation/vmware'),

  // Framework
  '/framework/spring-mvc/': require('./framework/spring-mvc'),
  '/framework/spring-boot/': require('./framework/spring-boot'),

  // Middleware
  '/middleware/rocketmq/': require('./middleware/rocketmq'),
  '/middleware/zookeeper/': require('./middleware/zookeeper'),
}
