import { Injectable } from "@angular/core";
import * as bigintModArith from 'bigint-mod-arith'
import { createHash, randomBytes } from "crypto";
import { GeneratedSrp6 } from "../../models/GeneratedSrp6";

@Injectable({providedIn: 'root'})
export class SRP6Service {
  private n: bigint = BigInt(`0x894B645E89E1535BBDAD5B8B290650530801B18EBFBF5E8FAB3C82872A3E9BB7`);
  private g: bigint = BigInt('0x7');

  public GetSRP6RegistrationData(username: string, password: string): GeneratedSrp6 {
      const salt: Buffer = randomBytes(32);
      const srp6 = this.CalculateSRP6(username, password, salt);
      const verifier = bigintModArith.modPow(this.g, srp6, this.n);
      const leVerifier: ArrayBuffer = new TextEncoder().encode(verifier.toString(16).match(/.{2}/g)?.reverse().join(``));

      let response: GeneratedSrp6 = {
          salt: salt,
          verifier: Buffer.from(leVerifier)
      }

      return response;
  }

  private CalculateSRP6(username: string, password: string, salt: Buffer) : bigint {
    const hash: string = 'sha1';

    const hash1: Buffer = createHash(hash).update(`${username}:${password}`).digest();
    const hash2: Buffer = createHash(hash).update(salt).update(hash1).digest();

    return hash2.readBigInt64LE();
  }
}
