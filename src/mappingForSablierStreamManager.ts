import { store } from "@graphprotocol/graph-ts"
import { SablierStreamCreated, SablierStreamCancelled } from "../generated/SablierManager/SablierManager"
import { loadOrCreateSablierStream } from "./helpers/loadOrCreateSablierStream"

export function handleSablierStreamCreated(event: SablierStreamCreated): void {
    const stream = loadOrCreateSablierStream(event.params.streamId.toHexString())
    stream.prizePool = event.params.prizePool.toHexString()
    stream.save()
}

export function handleSablierStreamCancelled(event: SablierStreamCancelled): void {
    const stream = loadOrCreateSablierStream(event.params.streamId.toHexString())
    store.remove("SablierStream", stream.id)
}

