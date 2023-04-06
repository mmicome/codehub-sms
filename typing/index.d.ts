export interface Options {
  prefetch?: number;
}

export interface Connect {
  protocol?: string | undefined;

  hostname?: string | undefined;

  port?: number | undefined;

  username?: string | undefined;

  password?: string | undefined;

  locale?: string | undefined;

  frameMax?: number | undefined;

  heartbeat?: number | undefined;

  vhost?: string | undefined;
}

export class SmsRabbitmq {
  constructor(options: Connect);
  /**
   * 注册池
   * @param serve
   */
  register(serve: string, options?: Options): Promise<boolean>;

  /**
   * 注销
   * @param serve
   */
  logout(serve: string): Promise<boolean>;

  /**
   * 消费
   * @param queue 队列
   * @param serve 服务名
   * @param options 配置
   * @returns
   */
  consume(queue: string, serve: string, options: Options): Promise<any>;

  /**
   * 消费
   * @param queue 队列
   * @param serve 服务名
   * @returns
   */
  consume(queue: string, serve: string): Promise<any>;

  /**
   * 消费
   * @param queue 队列
   * @param options 配置
   * @returns
   */
  consume(queue: string, options: Options): Promise<any>;

  /**
   * 消费
   * @param queue 队列
   * @returns
   */
  consume(queue: string): Promise<any>;

  /**
   * 生产
   * @param queue 队列
   * @param data 数据
   * @param serve 服务名
   */
  produce(queue: string, data: any, serve?: string): Promise<void>;
}
