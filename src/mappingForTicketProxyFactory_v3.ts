import { log } from '@graphprotocol/graph-ts'

import {
    ProxyCreated
} from '../generated/TicketProxyFactory_v3_1_0/TicketProxyFactory_v3_1_0'

import {
    ControlledToken as ControlledTokenTemplate
} from '../generated/templates'

export function handleProxyCreated(event: ProxyCreated): void {
    log.warning("TicketProxyFactory created {}", [event.params.proxy.toHexString()])
    ControlledTokenTemplate.create(event.params.proxy)
}
  