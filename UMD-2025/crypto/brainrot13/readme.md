
# brainrot13

## Description

We’re given a 1024-bit RSA modulus n and exponent e = 3, plus two ciphertexts in output.txt:

ct1 = RSA(OAEP-padded flag)

ct2 = RSA(OAEP-padded ROT13(flag))

The padding scheme appends repeated OAEP blocks until the plaintext block reaches a fixed length. Your goal is to recover the original flag.

### Additional files
1. `dist.py`  - Performs rsa encryptopm
2. `output.txt` - Out of the dist.py

## Source code review

1. `dist.py` shows how the two ciphertexts in output.ext were generated:

```
# rotflag = codecs.encode(flag, 'rot13')
ct1 = encrypt(flag.encode())
ct2 = encrypt(rotflag.encode())
```

2. Small-exponent vulnerability , With e = 3, the padded plaintext is smaller than the RSA modulus. We also know value of the known fixed portion of the padded flag UMDCTF{/* padding */}. 


## Exploit 
 Build and solve the polynomial with Sage/Coppersmith, This finds the unique small root corresponding to the padded flag.

```
n = <given modulus>
ct1 = <given ciphertext 1>
# known prefix
prefix = bytes_to_long(b'UMDCTF{') 
# padding length: OAEP blocks until 120 bytes total
l = 120 - len(b'UMDCTF{' + b'}')  

F.<x> = Zmod(n)[]
f = (x*256^l + prefix*256^l + 0)^3 - ct1
f = f.monic()
root = f.small_roots()[0]
recovered = long_to_bytes(root*256^l + prefix*256^l)

```
## Flag - `UMDCTF{shouldverotatedtwice}`

### Solved by - aroha