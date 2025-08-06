import { WebPlugin } from '@capacitor/core';
import type { PrinterPlugin } from './definitions';
export declare class PrinterWeb extends WebPlugin implements PrinterPlugin {
    print(): Promise<any>;
}
