import { McInfo } from './mcinfo';
import { CmInfo } from './cminfo';

export interface McRes {
    response: {
        mcCMInfo: {
            mc_Info: { McInfo },
            cm_Info: {
                CmInfo
            }
        }
    }
};