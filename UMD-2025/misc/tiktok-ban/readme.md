
# tiktok-ban

## Description
The challange involved bypassing a DNS filter check to retrive the txt record.

## Solution

The challenge involved interacting with a server that filters DNS queries. The goal was to retrieve a hidden flag from a DNS TXT record associated with `tiktok.com`.

Here's the step-by-step breakdown:

1. Analyzed the provided `filter.py`.
  - It runs a `dnsmasq` server that serves a `TXT` record containing the flag for `tiktok.com`.
  - However, if the incoming DNS query **contains** the raw bytes `tiktok\x03com`, it **rejects** the request with a message about TikTok being banned.

2. **Step 2:** Understanding the Filtering Weakness.
  - The server **naively checks** for the substring `b'tiktok\x03com'`.
  - DNS **is case-insensitive**, but bytewise substring matching is **case-sensitive**.
  - Therefore, **capitalizing letters** could bypass the check.

3. **Step 3:** Craft a Bypass Query.
  - Instead of sending `tiktok.com` in lowercase, send it with mixed casing like `TikTok.Com`.
  - Construct the DNS query manually with `build_query("TIKTOK.COM")` using the provided `exploit.py`.

Example packet (hex): 0000001c1234010000010000000000000654696b546f6b03436f6d0000100001


- **Step 4:** Connect and Extract the Flag.
  - The `exploit.py` sends a **TCP DNS query** with the domain in uppercase.
  - It then parses the returned DNS `TXT` response to extract and display the flag.

Example code snippet from `exploit.py`:
```python
domain = "TIKTOK.COM"
q = build_query(domain)
packet = struct.pack(">I", len(q)) + q

with socket.create_connection((host, port)) as s:
    s.sendall(packet)
    resp_repr = s.recv(4096).strip()

resp = ast.literal_eval(resp_repr.decode('latin-1'))
flag = parse_txt_response(resp)
print("flag:", flag)
```

### Key Trick: 

By using uppercase (e.g., TikTok.Com) and exploiting DNS case-insensitivity, we bypassed the bytewise filter that expected only a lowercase match.

## Flag 

![alt text](image.png)

UMDCTF{W31C0M3_84CK_4ND_7H4NK5_F0r_Y0Ur_P4713NC3_4ND_5UPP0r7_45_4_r35U17_0F_Pr351D3N7_7rUMP_71K70K_15_84CK_1N_7H3_U5}

### Solved by - aroha
