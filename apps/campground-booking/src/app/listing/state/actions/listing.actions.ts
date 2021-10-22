import { Listing } from "../models/listing";

export class UpdateGoodSamRecordForm {
    static readonly type = '[Listing] GoodSamRecord Update';
    constructor(public goodSamRecord: Listing) {}
}

