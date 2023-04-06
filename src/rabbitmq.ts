import * as _ from 'lodash';
import { Rabbitmq } from '@microhub/codehub-mq';
import { isType } from '@utils/common';
import { Options, Connect } from '@typing/index';

export default class SmsRabbitmq {
  private optionsMap = new Map();
  private registerMap = new Map();
  private defaultMq: Rabbitmq;

  constructor(private options: Connect) {
    this.defaultMq = new Rabbitmq(options);
    this.defaultMq.connect();
  }

  /**
   * 注册池
   * @param serve
   */
  async register(serve: string, options?: Options): Promise<boolean> {
    if (this.registerMap.has(serve)) return false;
    const mq = new Rabbitmq(this.options, serve);
    await mq.connect();
    options && this.optionsMap.set(serve, options);
    this.registerMap.set(serve, mq);
    return true;
  }

  /**
   * 注销
   * @param serve
   */
  async logout(serve: string): Promise<boolean> {
    const mq = this.registerMap.get(serve);
    await mq.channel.close();
    await mq.connection.close();
    this.registerMap.delete(serve);
    return true;
  }

  /**
   * 消费
   * @param queue 队列
   * @param serve 服务名
   * @param options 配置
   * @returns
   */
  async consume(queue: string, serve?: unknown, options?: Options): Promise<any> {
    if (!serve) {
      options = {};
      serve = '';
    } else if (isType(serve, 'Object')) {
      options = serve as Options;
      serve = '';
    }
    const mq = this.getMq(serve as string);
    const opt = { ...this.optionsMap.get(serve), ...options } as Options;
    mq.consumeSingle(queue, opt.prefetch, async () => console.log('内部消费'));
  }

  /**
   * 生产
   * @param queue 队列
   * @param data 数据
   * @param serve 服务名
   */
  async produce(queue: string, data: any, serve?: string): Promise<void> {
    const mq = this.getMq(serve);
    await mq.queue(queue, data);
  }

  private getMq(serve?: string) {
    return serve ? this.registerMap.get(serve) : this.defaultMq;
  }
}
