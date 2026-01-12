Project Path: Mechgust-2026

Source Tree:

```txt
Mechgust-2026
├── LICENSE
├── complete_project.md
├── index.html
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── public
│   └── events
│       └── image.jpg
├── src
│   ├── App.jsx
│   ├── animations.css
│   ├── assests
│   │   └── image.png
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contactus.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MetricsSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Nontech.jsx
│   │   ├── Onlineevents.jsx
│   │   ├── OriginalContent.jsx
│   │   ├── SpacemanScene.jsx
│   │   ├── SplineObject.jsx
│   │   ├── Tech.jsx
│   │   ├── WorkDetail.css
│   │   ├── WorksSection.jsx
│   │   └── Workshops.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── utils
│       └── animations.js
└── vite.config.js

```

`LICENSE`:

```
MIT License

Copyright (c) 2026 Pragadeesh V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

`index.html`:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MECHGUST'26 (React)</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

`package.json`:

```json
{
  "name": "mechgust-site",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.11.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0"
  }
}

```

`pnpm-lock.yaml`:

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      react:
        specifier: ^18.2.0
        version: 18.3.1
      react-dom:
        specifier: ^18.2.0
        version: 18.3.1(react@18.3.1)
      react-router-dom:
        specifier: ^7.11.0
        version: 7.11.0(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
    devDependencies:
      '@vitejs/plugin-react':
        specifier: ^4.0.0
        version: 4.7.0(vite@5.4.21)
      vite:
        specifier: ^5.0.0
        version: 5.4.21

packages:

  '@babel/code-frame@7.27.1':
    resolution: {integrity: sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.28.5':
    resolution: {integrity: sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.28.5':
    resolution: {integrity: sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.28.5':
    resolution: {integrity: sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.27.2':
    resolution: {integrity: sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-globals@7.28.0':
    resolution: {integrity: sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.27.1':
    resolution: {integrity: sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.28.3':
    resolution: {integrity: sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-plugin-utils@7.27.1':
    resolution: {integrity: sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.27.1':
    resolution: {integrity: sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.28.5':
    resolution: {integrity: sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.27.1':
    resolution: {integrity: sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.28.4':
    resolution: {integrity: sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.28.5':
    resolution: {integrity: sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-transform-react-jsx-self@7.27.1':
    resolution: {integrity: sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-source@7.27.1':
    resolution: {integrity: sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/template@7.27.2':
    resolution: {integrity: sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.28.5':
    resolution: {integrity: sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.28.5':
    resolution: {integrity: sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==}
    engines: {node: '>=6.9.0'}

  '@esbuild/aix-ppc64@0.21.5':
    resolution: {integrity: sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.21.5':
    resolution: {integrity: sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.21.5':
    resolution: {integrity: sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.21.5':
    resolution: {integrity: sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.21.5':
    resolution: {integrity: sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.21.5':
    resolution: {integrity: sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.21.5':
    resolution: {integrity: sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.21.5':
    resolution: {integrity: sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.21.5':
    resolution: {integrity: sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.21.5':
    resolution: {integrity: sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.21.5':
    resolution: {integrity: sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.21.5':
    resolution: {integrity: sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.21.5':
    resolution: {integrity: sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.21.5':
    resolution: {integrity: sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.21.5':
    resolution: {integrity: sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.21.5':
    resolution: {integrity: sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.21.5':
    resolution: {integrity: sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-x64@0.21.5':
    resolution: {integrity: sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-x64@0.21.5':
    resolution: {integrity: sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/sunos-x64@0.21.5':
    resolution: {integrity: sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.21.5':
    resolution: {integrity: sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.21.5':
    resolution: {integrity: sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.21.5':
    resolution: {integrity: sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/remapping@2.3.5':
    resolution: {integrity: sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.5':
    resolution: {integrity: sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@rolldown/pluginutils@1.0.0-beta.27':
    resolution: {integrity: sha512-+d0F4MKMCbeVUJwG96uQ4SgAznZNSq93I3V+9NHA4OpvqG8mRCpGdKmK8l/dl02h2CCDHwW2FqilnTyDcAnqjA==}

  '@rollup/rollup-android-arm-eabi@4.55.1':
    resolution: {integrity: sha512-9R0DM/ykwfGIlNu6+2U09ga0WXeZ9MRC2Ter8jnz8415VbuIykVuc6bhdrbORFZANDmTDvq26mJrEVTl8TdnDg==}
    cpu: [arm]
    os: [android]

  '@rollup/rollup-android-arm64@4.55.1':
    resolution: {integrity: sha512-eFZCb1YUqhTysgW3sj/55du5cG57S7UTNtdMjCW7LwVcj3dTTcowCsC8p7uBdzKsZYa8J7IDE8lhMI+HX1vQvg==}
    cpu: [arm64]
    os: [android]

  '@rollup/rollup-darwin-arm64@4.55.1':
    resolution: {integrity: sha512-p3grE2PHcQm2e8PSGZdzIhCKbMCw/xi9XvMPErPhwO17vxtvCN5FEA2mSLgmKlCjHGMQTP6phuQTYWUnKewwGg==}
    cpu: [arm64]
    os: [darwin]

  '@rollup/rollup-darwin-x64@4.55.1':
    resolution: {integrity: sha512-rDUjG25C9qoTm+e02Esi+aqTKSBYwVTaoS1wxcN47/Luqef57Vgp96xNANwt5npq9GDxsH7kXxNkJVEsWEOEaQ==}
    cpu: [x64]
    os: [darwin]

  '@rollup/rollup-freebsd-arm64@4.55.1':
    resolution: {integrity: sha512-+JiU7Jbp5cdxekIgdte0jfcu5oqw4GCKr6i3PJTlXTCU5H5Fvtkpbs4XJHRmWNXF+hKmn4v7ogI5OQPaupJgOg==}
    cpu: [arm64]
    os: [freebsd]

  '@rollup/rollup-freebsd-x64@4.55.1':
    resolution: {integrity: sha512-V5xC1tOVWtLLmr3YUk2f6EJK4qksksOYiz/TCsFHu/R+woubcLWdC9nZQmwjOAbmExBIVKsm1/wKmEy4z4u4Bw==}
    cpu: [x64]
    os: [freebsd]

  '@rollup/rollup-linux-arm-gnueabihf@4.55.1':
    resolution: {integrity: sha512-Rn3n+FUk2J5VWx+ywrG/HGPTD9jXNbicRtTM11e/uorplArnXZYsVifnPPqNNP5BsO3roI4n8332ukpY/zN7rQ==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm-musleabihf@4.55.1':
    resolution: {integrity: sha512-grPNWydeKtc1aEdrJDWk4opD7nFtQbMmV7769hiAaYyUKCT1faPRm2av8CX1YJsZ4TLAZcg9gTR1KvEzoLjXkg==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm64-gnu@4.55.1':
    resolution: {integrity: sha512-a59mwd1k6x8tXKcUxSyISiquLwB5pX+fJW9TkWU46lCqD/GRDe9uDN31jrMmVP3feI3mhAdvcCClhV8V5MhJFQ==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-arm64-musl@4.55.1':
    resolution: {integrity: sha512-puS1MEgWX5GsHSoiAsF0TYrpomdvkaXm0CofIMG5uVkP6IBV+ZO9xhC5YEN49nsgYo1DuuMquF9+7EDBVYu4uA==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-loong64-gnu@4.55.1':
    resolution: {integrity: sha512-r3Wv40in+lTsULSb6nnoudVbARdOwb2u5fpeoOAZjFLznp6tDU8kd+GTHmJoqZ9lt6/Sys33KdIHUaQihFcu7g==}
    cpu: [loong64]
    os: [linux]

  '@rollup/rollup-linux-loong64-musl@4.55.1':
    resolution: {integrity: sha512-MR8c0+UxAlB22Fq4R+aQSPBayvYa3+9DrwG/i1TKQXFYEaoW3B5b/rkSRIypcZDdWjWnpcvxbNaAJDcSbJU3Lw==}
    cpu: [loong64]
    os: [linux]

  '@rollup/rollup-linux-ppc64-gnu@4.55.1':
    resolution: {integrity: sha512-3KhoECe1BRlSYpMTeVrD4sh2Pw2xgt4jzNSZIIPLFEsnQn9gAnZagW9+VqDqAHgm1Xc77LzJOo2LdigS5qZ+gw==}
    cpu: [ppc64]
    os: [linux]

  '@rollup/rollup-linux-ppc64-musl@4.55.1':
    resolution: {integrity: sha512-ziR1OuZx0vdYZZ30vueNZTg73alF59DicYrPViG0NEgDVN8/Jl87zkAPu4u6VjZST2llgEUjaiNl9JM6HH1Vdw==}
    cpu: [ppc64]
    os: [linux]

  '@rollup/rollup-linux-riscv64-gnu@4.55.1':
    resolution: {integrity: sha512-uW0Y12ih2XJRERZ4jAfKamTyIHVMPQnTZcQjme2HMVDAHY4amf5u414OqNYC+x+LzRdRcnIG1YodLrrtA8xsxw==}
    cpu: [riscv64]
    os: [linux]

  '@rollup/rollup-linux-riscv64-musl@4.55.1':
    resolution: {integrity: sha512-u9yZ0jUkOED1BFrqu3BwMQoixvGHGZ+JhJNkNKY/hyoEgOwlqKb62qu+7UjbPSHYjiVy8kKJHvXKv5coH4wDeg==}
    cpu: [riscv64]
    os: [linux]

  '@rollup/rollup-linux-s390x-gnu@4.55.1':
    resolution: {integrity: sha512-/0PenBCmqM4ZUd0190j7J0UsQ/1nsi735iPRakO8iPciE7BQ495Y6msPzaOmvx0/pn+eJVVlZrNrSh4WSYLxNg==}
    cpu: [s390x]
    os: [linux]

  '@rollup/rollup-linux-x64-gnu@4.55.1':
    resolution: {integrity: sha512-a8G4wiQxQG2BAvo+gU6XrReRRqj+pLS2NGXKm8io19goR+K8lw269eTrPkSdDTALwMmJp4th2Uh0D8J9bEV1vg==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-linux-x64-musl@4.55.1':
    resolution: {integrity: sha512-bD+zjpFrMpP/hqkfEcnjXWHMw5BIghGisOKPj+2NaNDuVT+8Ds4mPf3XcPHuat1tz89WRL+1wbcxKY3WSbiT7w==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-openbsd-x64@4.55.1':
    resolution: {integrity: sha512-eLXw0dOiqE4QmvikfQ6yjgkg/xDM+MdU9YJuP4ySTibXU0oAvnEWXt7UDJmD4UkYialMfOGFPJnIHSe/kdzPxg==}
    cpu: [x64]
    os: [openbsd]

  '@rollup/rollup-openharmony-arm64@4.55.1':
    resolution: {integrity: sha512-xzm44KgEP11te3S2HCSyYf5zIzWmx3n8HDCc7EE59+lTcswEWNpvMLfd9uJvVX8LCg9QWG67Xt75AuHn4vgsXw==}
    cpu: [arm64]
    os: [openharmony]

  '@rollup/rollup-win32-arm64-msvc@4.55.1':
    resolution: {integrity: sha512-yR6Bl3tMC/gBok5cz/Qi0xYnVbIxGx5Fcf/ca0eB6/6JwOY+SRUcJfI0OpeTpPls7f194as62thCt/2BjxYN8g==}
    cpu: [arm64]
    os: [win32]

  '@rollup/rollup-win32-ia32-msvc@4.55.1':
    resolution: {integrity: sha512-3fZBidchE0eY0oFZBnekYCfg+5wAB0mbpCBuofh5mZuzIU/4jIVkbESmd2dOsFNS78b53CYv3OAtwqkZZmU5nA==}
    cpu: [ia32]
    os: [win32]

  '@rollup/rollup-win32-x64-gnu@4.55.1':
    resolution: {integrity: sha512-xGGY5pXj69IxKb4yv/POoocPy/qmEGhimy/FoTpTSVju3FYXUQQMFCaZZXJVidsmGxRioZAwpThl/4zX41gRKg==}
    cpu: [x64]
    os: [win32]

  '@rollup/rollup-win32-x64-msvc@4.55.1':
    resolution: {integrity: sha512-SPEpaL6DX4rmcXtnhdrQYgzQ5W2uW3SCJch88lB2zImhJRhIIK44fkUrgIV/Q8yUNfw5oyZ5vkeQsZLhCb06lw==}
    cpu: [x64]
    os: [win32]

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.27.0':
    resolution: {integrity: sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.28.0':
    resolution: {integrity: sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==}

  '@types/estree@1.0.8':
    resolution: {integrity: sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==}

  '@vitejs/plugin-react@4.7.0':
    resolution: {integrity: sha512-gUu9hwfWvvEDBBmgtAowQCojwZmJ5mcLn3aufeCsitijs3+f2NsrPtlAWIR6OPiqljl96GVCUbLe0HyqIpVaoA==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      vite: ^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0

  baseline-browser-mapping@2.9.11:
    resolution: {integrity: sha512-Sg0xJUNDU1sJNGdfGWhVHX0kkZ+HWcvmVymJbj6NSgZZmW/8S9Y2HQ5euytnIgakgxN6papOAWiwDo1ctFDcoQ==}
    hasBin: true

  browserslist@4.28.1:
    resolution: {integrity: sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  caniuse-lite@1.0.30001762:
    resolution: {integrity: sha512-PxZwGNvH7Ak8WX5iXzoK1KPZttBXNPuaOvI2ZYU7NrlM+d9Ov+TUvlLOBNGzVXAntMSMMlJPd+jY6ovrVjSmUw==}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cookie@1.1.1:
    resolution: {integrity: sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==}
    engines: {node: '>=18'}

  debug@4.4.3:
    resolution: {integrity: sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  electron-to-chromium@1.5.267:
    resolution: {integrity: sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==}

  esbuild@0.21.5:
    resolution: {integrity: sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==}
    engines: {node: '>=12'}
    hasBin: true

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  nanoid@3.3.11:
    resolution: {integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  node-releases@2.0.27:
    resolution: {integrity: sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  postcss@8.5.6:
    resolution: {integrity: sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==}
    engines: {node: ^10 || ^12 || >=14}

  react-dom@18.3.1:
    resolution: {integrity: sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==}
    peerDependencies:
      react: ^18.3.1

  react-refresh@0.17.0:
    resolution: {integrity: sha512-z6F7K9bV85EfseRCp2bzrpyQ0Gkw1uLoCel9XBVWPg/TjRj94SkJzUTGfOa4bs7iJvBWtQG0Wq7wnI0syw3EBQ==}
    engines: {node: '>=0.10.0'}

  react-router-dom@7.11.0:
    resolution: {integrity: sha512-e49Ir/kMGRzFOOrYQBdoitq3ULigw4lKbAyKusnvtDu2t4dBX4AGYPrzNvorXmVuOyeakai6FUPW5MmibvVG8g==}
    engines: {node: '>=20.0.0'}
    peerDependencies:
      react: '>=18'
      react-dom: '>=18'

  react-router@7.11.0:
    resolution: {integrity: sha512-uI4JkMmjbWCZc01WVP2cH7ZfSzH91JAZUDd7/nIprDgWxBV1TkkmLToFh7EbMTcMak8URFRa2YoBL/W8GWnCTQ==}
    engines: {node: '>=20.0.0'}
    peerDependencies:
      react: '>=18'
      react-dom: '>=18'
    peerDependenciesMeta:
      react-dom:
        optional: true

  react@18.3.1:
    resolution: {integrity: sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==}
    engines: {node: '>=0.10.0'}

  rollup@4.55.1:
    resolution: {integrity: sha512-wDv/Ht1BNHB4upNbK74s9usvl7hObDnvVzknxqY/E/O3X6rW1U1rV1aENEfJ54eFZDTNo7zv1f5N4edCluH7+A==}
    engines: {node: '>=18.0.0', npm: '>=8.0.0'}
    hasBin: true

  scheduler@0.23.2:
    resolution: {integrity: sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  set-cookie-parser@2.7.2:
    resolution: {integrity: sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  update-browserslist-db@1.2.3:
    resolution: {integrity: sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  vite@5.4.21:
    resolution: {integrity: sha512-o5a9xKjbtuhY6Bi5S3+HvbRERmouabWbyUcpXXUA1u+GNUKoROi9byOJ8M0nHbHYHkYICiMlqxkg1KkYmm25Sw==}
    engines: {node: ^18.0.0 || >=20.0.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^18.0.0 || >=20.0.0
      less: '*'
      lightningcss: ^1.21.0
      sass: '*'
      sass-embedded: '*'
      stylus: '*'
      sugarss: '*'
      terser: ^5.4.0
    peerDependenciesMeta:
      '@types/node':
        optional: true
      less:
        optional: true
      lightningcss:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

snapshots:

  '@babel/code-frame@7.27.1':
    dependencies:
      '@babel/helper-validator-identifier': 7.28.5
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.28.5': {}

  '@babel/core@7.28.5':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.28.5
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-module-transforms': 7.28.3(@babel/core@7.28.5)
      '@babel/helpers': 7.28.4
      '@babel/parser': 7.28.5
      '@babel/template': 7.27.2
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
      '@jridgewell/remapping': 2.3.5
      convert-source-map: 2.0.0
      debug: 4.4.3
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.28.5':
    dependencies:
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31
      jsesc: 3.1.0

  '@babel/helper-compilation-targets@7.27.2':
    dependencies:
      '@babel/compat-data': 7.28.5
      '@babel/helper-validator-option': 7.27.1
      browserslist: 4.28.1
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-globals@7.28.0': {}

  '@babel/helper-module-imports@7.27.1':
    dependencies:
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.28.3(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-module-imports': 7.27.1
      '@babel/helper-validator-identifier': 7.28.5
      '@babel/traverse': 7.28.5
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-plugin-utils@7.27.1': {}

  '@babel/helper-string-parser@7.27.1': {}

  '@babel/helper-validator-identifier@7.28.5': {}

  '@babel/helper-validator-option@7.27.1': {}

  '@babel/helpers@7.28.4':
    dependencies:
      '@babel/template': 7.27.2
      '@babel/types': 7.28.5

  '@babel/parser@7.28.5':
    dependencies:
      '@babel/types': 7.28.5

  '@babel/plugin-transform-react-jsx-self@7.27.1(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-react-jsx-source@7.27.1(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/template@7.27.2':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5

  '@babel/traverse@7.28.5':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.28.5
      '@babel/helper-globals': 7.28.0
      '@babel/parser': 7.28.5
      '@babel/template': 7.27.2
      '@babel/types': 7.28.5
      debug: 4.4.3
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.28.5':
    dependencies:
      '@babel/helper-string-parser': 7.27.1
      '@babel/helper-validator-identifier': 7.28.5

  '@esbuild/aix-ppc64@0.21.5':
    optional: true

  '@esbuild/android-arm64@0.21.5':
    optional: true

  '@esbuild/android-arm@0.21.5':
    optional: true

  '@esbuild/android-x64@0.21.5':
    optional: true

  '@esbuild/darwin-arm64@0.21.5':
    optional: true

  '@esbuild/darwin-x64@0.21.5':
    optional: true

  '@esbuild/freebsd-arm64@0.21.5':
    optional: true

  '@esbuild/freebsd-x64@0.21.5':
    optional: true

  '@esbuild/linux-arm64@0.21.5':
    optional: true

  '@esbuild/linux-arm@0.21.5':
    optional: true

  '@esbuild/linux-ia32@0.21.5':
    optional: true

  '@esbuild/linux-loong64@0.21.5':
    optional: true

  '@esbuild/linux-mips64el@0.21.5':
    optional: true

  '@esbuild/linux-ppc64@0.21.5':
    optional: true

  '@esbuild/linux-riscv64@0.21.5':
    optional: true

  '@esbuild/linux-s390x@0.21.5':
    optional: true

  '@esbuild/linux-x64@0.21.5':
    optional: true

  '@esbuild/netbsd-x64@0.21.5':
    optional: true

  '@esbuild/openbsd-x64@0.21.5':
    optional: true

  '@esbuild/sunos-x64@0.21.5':
    optional: true

  '@esbuild/win32-arm64@0.21.5':
    optional: true

  '@esbuild/win32-ia32@0.21.5':
    optional: true

  '@esbuild/win32-x64@0.21.5':
    optional: true

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@rolldown/pluginutils@1.0.0-beta.27': {}

  '@rollup/rollup-android-arm-eabi@4.55.1':
    optional: true

  '@rollup/rollup-android-arm64@4.55.1':
    optional: true

  '@rollup/rollup-darwin-arm64@4.55.1':
    optional: true

  '@rollup/rollup-darwin-x64@4.55.1':
    optional: true

  '@rollup/rollup-freebsd-arm64@4.55.1':
    optional: true

  '@rollup/rollup-freebsd-x64@4.55.1':
    optional: true

  '@rollup/rollup-linux-arm-gnueabihf@4.55.1':
    optional: true

  '@rollup/rollup-linux-arm-musleabihf@4.55.1':
    optional: true

  '@rollup/rollup-linux-arm64-gnu@4.55.1':
    optional: true

  '@rollup/rollup-linux-arm64-musl@4.55.1':
    optional: true

  '@rollup/rollup-linux-loong64-gnu@4.55.1':
    optional: true

  '@rollup/rollup-linux-loong64-musl@4.55.1':
    optional: true

  '@rollup/rollup-linux-ppc64-gnu@4.55.1':
    optional: true

  '@rollup/rollup-linux-ppc64-musl@4.55.1':
    optional: true

  '@rollup/rollup-linux-riscv64-gnu@4.55.1':
    optional: true

  '@rollup/rollup-linux-riscv64-musl@4.55.1':
    optional: true

  '@rollup/rollup-linux-s390x-gnu@4.55.1':
    optional: true

  '@rollup/rollup-linux-x64-gnu@4.55.1':
    optional: true

  '@rollup/rollup-linux-x64-musl@4.55.1':
    optional: true

  '@rollup/rollup-openbsd-x64@4.55.1':
    optional: true

  '@rollup/rollup-openharmony-arm64@4.55.1':
    optional: true

  '@rollup/rollup-win32-arm64-msvc@4.55.1':
    optional: true

  '@rollup/rollup-win32-ia32-msvc@4.55.1':
    optional: true

  '@rollup/rollup-win32-x64-gnu@4.55.1':
    optional: true

  '@rollup/rollup-win32-x64-msvc@4.55.1':
    optional: true

  '@types/babel__core@7.20.5':
    dependencies:
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5
      '@types/babel__generator': 7.27.0
      '@types/babel__template': 7.4.4
      '@types/babel__traverse': 7.28.0

  '@types/babel__generator@7.27.0':
    dependencies:
      '@babel/types': 7.28.5

  '@types/babel__template@7.4.4':
    dependencies:
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5

  '@types/babel__traverse@7.28.0':
    dependencies:
      '@babel/types': 7.28.5

  '@types/estree@1.0.8': {}

  '@vitejs/plugin-react@4.7.0(vite@5.4.21)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/plugin-transform-react-jsx-self': 7.27.1(@babel/core@7.28.5)
      '@babel/plugin-transform-react-jsx-source': 7.27.1(@babel/core@7.28.5)
      '@rolldown/pluginutils': 1.0.0-beta.27
      '@types/babel__core': 7.20.5
      react-refresh: 0.17.0
      vite: 5.4.21
    transitivePeerDependencies:
      - supports-color

  baseline-browser-mapping@2.9.11: {}

  browserslist@4.28.1:
    dependencies:
      baseline-browser-mapping: 2.9.11
      caniuse-lite: 1.0.30001762
      electron-to-chromium: 1.5.267
      node-releases: 2.0.27
      update-browserslist-db: 1.2.3(browserslist@4.28.1)

  caniuse-lite@1.0.30001762: {}

  convert-source-map@2.0.0: {}

  cookie@1.1.1: {}

  debug@4.4.3:
    dependencies:
      ms: 2.1.3

  electron-to-chromium@1.5.267: {}

  esbuild@0.21.5:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.21.5
      '@esbuild/android-arm': 0.21.5
      '@esbuild/android-arm64': 0.21.5
      '@esbuild/android-x64': 0.21.5
      '@esbuild/darwin-arm64': 0.21.5
      '@esbuild/darwin-x64': 0.21.5
      '@esbuild/freebsd-arm64': 0.21.5
      '@esbuild/freebsd-x64': 0.21.5
      '@esbuild/linux-arm': 0.21.5
      '@esbuild/linux-arm64': 0.21.5
      '@esbuild/linux-ia32': 0.21.5
      '@esbuild/linux-loong64': 0.21.5
      '@esbuild/linux-mips64el': 0.21.5
      '@esbuild/linux-ppc64': 0.21.5
      '@esbuild/linux-riscv64': 0.21.5
      '@esbuild/linux-s390x': 0.21.5
      '@esbuild/linux-x64': 0.21.5
      '@esbuild/netbsd-x64': 0.21.5
      '@esbuild/openbsd-x64': 0.21.5
      '@esbuild/sunos-x64': 0.21.5
      '@esbuild/win32-arm64': 0.21.5
      '@esbuild/win32-ia32': 0.21.5
      '@esbuild/win32-x64': 0.21.5

  escalade@3.2.0: {}

  fsevents@2.3.3:
    optional: true

  gensync@1.0.0-beta.2: {}

  js-tokens@4.0.0: {}

  jsesc@3.1.0: {}

  json5@2.2.3: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  ms@2.1.3: {}

  nanoid@3.3.11: {}

  node-releases@2.0.27: {}

  picocolors@1.1.1: {}

  postcss@8.5.6:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  react-dom@18.3.1(react@18.3.1):
    dependencies:
      loose-envify: 1.4.0
      react: 18.3.1
      scheduler: 0.23.2

  react-refresh@0.17.0: {}

  react-router-dom@7.11.0(react-dom@18.3.1(react@18.3.1))(react@18.3.1):
    dependencies:
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
      react-router: 7.11.0(react-dom@18.3.1(react@18.3.1))(react@18.3.1)

  react-router@7.11.0(react-dom@18.3.1(react@18.3.1))(react@18.3.1):
    dependencies:
      cookie: 1.1.1
      react: 18.3.1
      set-cookie-parser: 2.7.2
    optionalDependencies:
      react-dom: 18.3.1(react@18.3.1)

  react@18.3.1:
    dependencies:
      loose-envify: 1.4.0

  rollup@4.55.1:
    dependencies:
      '@types/estree': 1.0.8
    optionalDependencies:
      '@rollup/rollup-android-arm-eabi': 4.55.1
      '@rollup/rollup-android-arm64': 4.55.1
      '@rollup/rollup-darwin-arm64': 4.55.1
      '@rollup/rollup-darwin-x64': 4.55.1
      '@rollup/rollup-freebsd-arm64': 4.55.1
      '@rollup/rollup-freebsd-x64': 4.55.1
      '@rollup/rollup-linux-arm-gnueabihf': 4.55.1
      '@rollup/rollup-linux-arm-musleabihf': 4.55.1
      '@rollup/rollup-linux-arm64-gnu': 4.55.1
      '@rollup/rollup-linux-arm64-musl': 4.55.1
      '@rollup/rollup-linux-loong64-gnu': 4.55.1
      '@rollup/rollup-linux-loong64-musl': 4.55.1
      '@rollup/rollup-linux-ppc64-gnu': 4.55.1
      '@rollup/rollup-linux-ppc64-musl': 4.55.1
      '@rollup/rollup-linux-riscv64-gnu': 4.55.1
      '@rollup/rollup-linux-riscv64-musl': 4.55.1
      '@rollup/rollup-linux-s390x-gnu': 4.55.1
      '@rollup/rollup-linux-x64-gnu': 4.55.1
      '@rollup/rollup-linux-x64-musl': 4.55.1
      '@rollup/rollup-openbsd-x64': 4.55.1
      '@rollup/rollup-openharmony-arm64': 4.55.1
      '@rollup/rollup-win32-arm64-msvc': 4.55.1
      '@rollup/rollup-win32-ia32-msvc': 4.55.1
      '@rollup/rollup-win32-x64-gnu': 4.55.1
      '@rollup/rollup-win32-x64-msvc': 4.55.1
      fsevents: 2.3.3

  scheduler@0.23.2:
    dependencies:
      loose-envify: 1.4.0

  semver@6.3.1: {}

  set-cookie-parser@2.7.2: {}

  source-map-js@1.2.1: {}

  update-browserslist-db@1.2.3(browserslist@4.28.1):
    dependencies:
      browserslist: 4.28.1
      escalade: 3.2.0
      picocolors: 1.1.1

  vite@5.4.21:
    dependencies:
      esbuild: 0.21.5
      postcss: 8.5.6
      rollup: 4.55.1
    optionalDependencies:
      fsevents: 2.3.3

  yallist@3.1.1: {}

```

`src/App.jsx`:

```jsx
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MetricsSection from './components/MetricsSection'
import WorksSection from './components/WorksSection'
import Footer from './components/Footer'
import Nontech from './components/Nontech'
import Tech from './components/Tech'
import Workshops from './components/Workshops'
import Onlineevents from './components/Onlineevents'
import About from './components/About'
import Contactus from './components/Contactus'

import { initializeAnimations, addHoverAnimations, initScrollAnimations } from './utils/animations'

const basename = import.meta.env.MODE === 'production' ? '/Mechgust-2026' : ''

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function HomePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeAnimations()
      addHoverAnimations()
      initScrollAnimations()
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <WorksSection />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nontech" element={<Nontech />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/onlineevents" element={<Onlineevents />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  )
}

```

`src/animations.css`:

```css
/* Animation Keyframes */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply animations to specific elements */

.hero-text {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
  opacity: 0;
}

.hero-subheading-flex {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
  opacity: 0;
}

.hero-flex {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
  opacity: 0;
}

.metrics-text-block {
  animation: fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.metrics-text-block:nth-child(1) {
  animation-delay: 0.3s;
}

.metrics-text-block:nth-child(2) {
  animation-delay: 0.45s;
}

.metrics-text-block:nth-child(3) {
  animation-delay: 0.6s;
}

.works-wrapper {
  animation: fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.works-wrapper:nth-child(1) {
  animation-delay: 0.4s;
}

.works-wrapper:nth-child(2) {
  animation-delay: 0.55s;
}

.works-wrapper:nth-child(3) {
  animation-delay: 0.7s;
}

.avatar-a,
.avatar-b,
.avatar-c {
  animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

.avatar-a {
  animation-delay: 0.8s;
}

.avatar-b {
  animation-delay: 0.9s;
}

.avatar-c {
  animation-delay: 1s;
}

.social-icon {
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.social-icon:nth-child(1) {
  animation-delay: 0.9s;
}

.social-icon:nth-child(2) {
  animation-delay: 1s;
}

.social-icon:nth-child(3) {
  animation-delay: 1.1s;
}

/* Hover animations */
.button-with-circle-icon,
.works-link-wrapper,
.social-icon {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-with-circle-icon:hover,
.works-link-wrapper:hover,
.social-icon:hover {
  transform: scale(1.05);
}

/* Smooth transitions */
* {
  transition-property: opacity, transform, background-color, color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Spline 3D Object Styling */
.spline {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
}

.spline canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
  object-fit: contain;
}

.spline.spline-loaded {
  opacity: 1;
}

.spline.spline-loaded canvas {
  opacity: 1;
}

/* Parallax text effect */
.large-title {
  transition: transform 0.1s ease-out;
}

/* Navbar scroll effect */
.navbar {
  transition: box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}

/* Mobile-specific hero section fixes */
@media screen and (max-width: 991px) {
  .hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10vh;
    position: relative;
  }
  
  .hero-content-wrapper {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    max-width: 90% !important;
    margin: 0 auto 1rem auto;
    text-align: center;
    z-index: 10 !important;
    order: 1 !important;
  }
  
  .spline {
    position: relative !important;
    width: 80% !important;
    max-width: 300px !important;
    height: 300px !important;
    margin: 0 auto 2rem auto !important;
    z-index: 5 !important;
    opacity: 1 !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    min-height: 300px !important;
    max-height: 300px !important;
    min-width: auto !important;
    max-width: 300px !important;
    order: 2 !important;
  }
  
  .hero-flex {
    justify-content: center !important;
    order: 3 !important;
  }
  
  .hero-cards-wrapper {
    display: none;
  }
  
  .hero-bg {
    display: none;
  }
  
  .hero-overlay {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .hero-section {
    padding-top: 12vh;
  }
  
  .hero-content-wrapper {
    max-width: 95% !important;
    padding: 0 1rem;
  }
  
  .spline {
    max-width: 250px !important;
    height: 250px !important;
    min-height: 250px !important;
    max-height: 250px !important;
  }
}

@media screen and (max-width: 479px) {
  .hero-section {
    padding-top: 10vh;
  }
  
  .hero-content-wrapper h1 {
    font-size: clamp(28px, 10vw, 48px) !important;
  }
  
  .spline {
    max-width: 200px !important;
    height: 200px !important;
    min-height: 200px !important;
    max-height: 200px !important;
  }
}

/* Force desktop navbar on mobile - only apply compact styles on small screens */
@media screen and (max-width: 991px) {
  .navbar {
    height: auto !important;
    min-height: 60px;
    padding: 0.5rem 3% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
  }

  .nav-menu {
    background-color: transparent !important;
    flex-direction: row !important;
    position: static !important;
    padding-top: 0 !important;
    display: flex !important;
    align-items: center;
    gap: 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    font-size: 0.65rem !important;
    line-height: 1.2 !important;
    min-height: auto !important;
    padding: 0.5rem 0.5rem !important;
    white-space: nowrap;
  }

  .nav-link-wrapper {
    display: inline-block;
  }

  .menu-button,
  .w-nav-button {
    display: none !important;
  }

  .mobile-nav-menu {
    display: none !important;
  }

  .logo-link-wrapper {
    flex-shrink: 0;
  }

  .logo {
    width: 30px !important;
    height: 30px !important;
  }

  .hide-on-mobile {
    display: flex !important;
  }

  .button-with-circle-icon {
    padding: 0.3rem 0.8rem !important;
    font-size: 0.7rem !important;
  }

  .button-flex {
    min-width: auto !important;
    min-height: auto !important;
    padding: 0.2rem 0.5rem !important;
  }

  .button-arrow-wrapper {
    width: 28px !important;
    height: 28px !important;
  }

  .button-icon {
    width: 12px !important;
    height: 12px !important;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 0.5rem 2% !important;
  }
  
  .nav-link {
    font-size: 0.55rem !important;
    padding: 0.4rem 0.35rem !important;
  }
  
  .logo {
    width: 24px !important;
    height: 24px !important;
  }
  
  .button-flex {
    display: none !important;
  }
  
  .button-arrow-wrapper {
    width: 24px !important;
    height: 24px !important;
  }
}

@media screen and (max-width: 480px) {
  .nav-link {
    font-size: 0.5rem !important;
    padding: 0.3rem 0.25rem !important;
  }
  
  .logo {
    width: 20px !important;
    height: 20px !important;
  }
}

```

`src/components/About.jsx`:

```jsx
import { useNavigate, Link } from 'react-router-dom'
import './WorkDetail.css'

export default function About() {
  const navigate = useNavigate()

  const teamMembers = [
    {
      name: 'Dr. John Smith',
      role: 'FACULTY COORDINATOR',
      email: 'john@mech.edu',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea69fc_Team3.jpg'
    },
    {
      name: 'Priya Kumar',
      role: 'STUDENT COORDINATOR',
      email: 'priya@mech.edu',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3c_Team2.jpg'
    },
    {
      name: 'Rahul Dev',
      role: 'TECH LEAD',
      email: 'rahul@mech.edu',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3e_Team1.jpg'
    }
  ]

  const timelineData = [
    { year: '2001', label: 'FOUNDED', desc: 'Department of Mechanical Engineering established with a vision to create future innovators.' },
    { year: '2015', label: 'FIRST SYMPOSIUM', desc: 'MECHGUST was born as a small departmental event with just 200 participants.' },
    { year: '2023', label: '2K+ PARTICIPANTS', desc: 'Grew into one of the largest technical symposiums in the region.' },
    { year: '2026', label: 'SILVER ERA', desc: 'Celebrating 25 years of excellence with our biggest edition yet.' }
  ]

  const skills = [
    { name: 'TECHNICAL EVENTS', percent: 85 },
    { name: 'WORKSHOPS', percent: 90 },
    { name: 'INNOVATION', percent: 75 },
    { name: 'STUDENT ENGAGEMENT', percent: 95 }
  ]

  return (
    <div className="work-detail-page" style={{ background: '#050505' }}>
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close"
      >✕ Close</button>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        padding: '10rem 5% 4rem',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left - Title */}
            <div>
              <h1 style={{
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                fontWeight: '700',
                color: '#fff',
                lineHeight: '0.95',
                margin: 0,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                ABOUT US
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginTop: '1rem' }}>
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </h1>
              
              {/* Arrow Icon */}
              <div style={{ marginTop: '3rem' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
            
            {/* Right - Avatars & Tagline */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                marginBottom: '2rem'
              }}>
                {teamMembers.map((member, i) => (
                  <div key={i} style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    border: '3px solid #050505',
                    overflow: 'hidden',
                    marginLeft: i > 0 ? '-20px' : 0
                  }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
              <p style={{
                color: '#888',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                lineHeight: '1.8',
                textTransform: 'uppercase'
              }}>
                WE TRANSFORM<br/>
                YOUR IDEAS INTO<br/>
                STUNNING EXPERIENCES.
              </p>
            </div>
          </div>

          {/* Folder Cards */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '4rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {/* Card 1 - MECH */}
            <div style={{
              background: 'linear-gradient(145deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '20px',
              padding: '2rem',
              width: '200px',
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                right: '20px',
                height: '20px',
                background: '#252540',
                borderRadius: '8px 8px 0 0'
              }}/>
              <span style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>MECH</span>
              <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.2em' }}>DEPARTMENT</span>
              <div style={{
                marginTop: '1rem',
                width: '50px',
                height: '50px',
                border: '2px solid #444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
            </div>

            {/* Card 2 - Image */}
            <div style={{
              background: '#f5f5f5',
              borderRadius: '20px',
              width: '200px',
              height: '180px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670229a75f4844ac9d8daa0a_Services-p-500.jpg"
                alt="Symposium"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Card 3 - Satisfaction */}
            <div style={{
              background: 'linear-gradient(145deg, #1a1a2e 0%, #16162a 100%)',
              borderRadius: '20px',
              padding: '2rem',
              width: '200px',
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                right: '20px',
                height: '20px',
                background: '#252540',
                borderRadius: '8px 8px 0 0'
              }}/>
              <span style={{ fontSize: '0.6rem', color: '#888', marginBottom: '0.5rem' }}>✦</span>
              <span style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff' }}>99.7<sup style={{ fontSize: '1rem' }}>%</sup></span>
              <span style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.15em' }}>SATISFACTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '6rem 5%', background: '#050505' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left - Title */}
          <div>
            <p style={{
              color: '#666',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ opacity: 0.5 }}>◎</span> WELCOME
            </p>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '400',
              color: '#fff',
              margin: '0 0 1.5rem 0',
              fontStyle: 'italic'
            }}>Our Timeline</h2>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: '1.8',
              maxWidth: '400px',
              marginBottom: '2rem'
            }}>
              Established in 2001, our department emerged from a collective passion for engineering, innovation, and the boundless potential of mechanical systems.
            </p>
            <Link 
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem 0.8rem 2rem',
                background: 'transparent',
                border: '1px solid #444',
                borderRadius: '50px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.1em'
              }}
            >
              EXPLORE
              <span style={{
                width: '32px',
                height: '32px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Right - Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {timelineData.map((item, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(30,30,50,0.8) 0%, rgba(20,20,35,0.9) 100%)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #1a1a2a'
              }}>
                <p style={{
                  color: '#666',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  marginBottom: '0.5rem'
                }}>{item.label}</p>
                <h3 style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#fff',
                  margin: '0 0 1rem 0'
                }}>{item.year}</h3>
                <p style={{
                  color: '#888',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '6rem 5%', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.5 }}>◎</span> EVENTS
            </p>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '700', color: '#fff', margin: 0 }}>25+</h2>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.5 }}>▲</span> PARTICIPANTS
            </p>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '700', color: '#fff', margin: 0 }}>2K+</h2>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              <span style={{ opacity: 0.5 }}>✦</span> YEARS
            </p>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '700', color: '#fff', margin: 0 }}>25</h2>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            color: '#666',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>✦</span> OUR VISION
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            fontWeight: '400',
            lineHeight: '1.4',
            margin: 0
          }}>
            <span style={{ color: '#fff' }}>We Aspire To </span>
            <span style={{ color: '#444' }}>Be A Driving Force Behind A Future </span>
            <span style={{ color: '#fff' }}>Where Innovation </span>
            <span style={{ color: '#444' }}>Is A Powerful Catalyst For Positive Change.</span>
          </h2>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              color: '#666',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              marginBottom: '1rem'
            }}>GET TO KNOW US</p>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '400',
              margin: 0
            }}>
              <span style={{ color: '#fff', fontStyle: 'italic' }}>The </span>
              <span style={{ color: '#444' }}>Team</span>
            </h2>
            <p style={{
              color: '#666',
              fontSize: '1rem',
              marginTop: '1.5rem',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Our team of talented coordinators and volunteers bring expertise and creativity to every event.
            </p>
          </div>

          {/* Team Cards */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            position: 'relative'
          }}>
            {teamMembers.map((member, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                marginTop: i * 60 + 'px'
              }}>
                <div style={{
                  width: '200px',
                  height: '250px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#f5f5f5'
                }}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p style={{
                    color: '#666',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    marginBottom: '0.5rem'
                  }}>{member.role}</p>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    margin: '0 0 0.5rem 0'
                  }}>{member.name}</h3>
                  <p style={{
                    color: '#666',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem'
                  }}>{member.email.toUpperCase()}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {['youtube', 'instagram', 'tiktok'].map((social) => (
                      <a key={social} href="#" style={{
                        width: '28px',
                        height: '28px',
                        background: '#1a1a1a',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                          <circle cx="12" cy="12" r="4"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{
              fontSize: '6rem',
              color: 'transparent',
              WebkitTextStroke: '1px #444',
              lineHeight: 0.8
            }}>"</span>
            <div>
              <p style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '400',
                fontStyle: 'italic',
                color: '#fff',
                lineHeight: '1.5',
                marginBottom: '2rem'
              }}>
                I was blown away by the creativity and innovation at MECHGUST. The events were well-organized and the experience was unforgettable.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3c_Team2.jpg"
                    alt="Testimonial"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.1em' }}>SARAH WINTER</p>
                  <p style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.1em' }}>PARTICIPANT 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left - Skills */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '0.2em' }}>OUR </span>
              <span style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '700' }}>SKILLS</span>
            </div>
            
            {skills.map((skill, i) => (
              <div key={i} style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    color: i % 2 === 0 ? '#333' : '#fff',
                    fontStyle: 'italic'
                  }}>{skill.percent}%</span>
                </div>
                <div style={{
                  height: '1px',
                  background: `linear-gradient(90deg, #333 0%, #333 ${skill.percent}%, #1a1a1a ${skill.percent}%)`
                }}/>
                <p style={{
                  color: '#666',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  marginTop: '0.5rem'
                }}>{skill.name}</p>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#fff'
          }}>
            <img 
              src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67038dd51127140791a4bc7c_PosterMockup-p-500.jpg"
              alt="Skills showcase"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/components/Contactus.jsx`:

```jsx
import { useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Contactus() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Message sent! We will get back to you soon.')
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close"
      >✕ Close</button>

      <section className="events-section" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
        <div className="w-layout-blockcontainer container w-container">
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ 
              color: '#888', 
              letterSpacing: '0.2em', 
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>Get In Touch</p>
            <h1 style={{ 
              fontSize: 'clamp(3rem, 10vw, 8rem)', 
              fontWeight: '700',
              margin: 0,
              lineHeight: 1
            }}>
              <span style={{ color: '#fff' }}>CON</span>
              <span style={{ color: '#333' }}>TACT</span>
            </h1>
          </div>
          
          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Name</label>
                <input 
                  type="text" 
                  placeholder="e. g. John Doe"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="e. g. johndoe@email.com"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(123) - 456 - 789"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#f5f5f5', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>Your Message</label>
                <textarea 
                  placeholder="Write Your Message Here"
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  padding: '1rem 2.5rem',
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#f0f0f0'
                  e.target.style.transform = 'scale(1.02)'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#fff'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                SUBMIT
              </button>
            </form>
            
            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Email Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: '#1a1a1a',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid #2a2a2a'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#2a2a2a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ 
                    color: '#888', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>EMAIL</p>
                  <p style={{ color: '#f5f5f5', fontSize: '1rem', margin: 0 }}>mechgust26@mech.edu</p>
                </div>
              </div>
              
              {/* Location Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: '#1a1a1a',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid #2a2a2a'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#2a2a2a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <p style={{ 
                    color: '#888', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>LOCATION</p>
                  <p style={{ color: '#f5f5f5', fontSize: '1rem', margin: 0, lineHeight: 1.4 }}>
                    Department of Mechanical Engineering<br/>
                    College Campus, Main Building
                  </p>
                </div>
              </div>
              
              {/* Phone Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: '#1a1a1a',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid #2a2a2a'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#2a2a2a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ 
                    color: '#888', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.15em',
                    marginBottom: '0.25rem',
                    textTransform: 'uppercase'
                  }}>PHONE</p>
                  <p style={{ color: '#f5f5f5', fontSize: '1rem', margin: 0 }}>+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/components/Footer.jsx`:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer style={{ background: '#050505', padding: '0', marginTop: '4rem' }}>
      {/* CTA Section */}
      <section style={{
        textAlign: 'center',
        padding: '6rem 2rem',
        borderBottom: '1px solid #1a1a1a'
      }}>
        <p style={{
          color: '#888',
          fontSize: '0.85rem',
          letterSpacing: '0.2em',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ fontSize: '0.7rem' }}>✦</span> GET IN TOUCH
        </p>
        
        <h2 style={{
          fontSize: 'clamp(2.5rem, 10vw, 7rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          margin: '0 0 1rem 0'
        }}>
          <span style={{ color: '#fff', fontStyle: 'italic' }}>LET'S </span>
          <span style={{ 
            color: 'transparent',
            WebkitTextStroke: '1px #fff',
            fontStyle: 'normal'
          }}>WORK</span>
        </h2>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 10vw, 7rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          margin: '0 0 2.5rem 0',
          color: 'transparent',
          WebkitTextStroke: '1px #fff',
          fontStyle: 'italic'
        }}>TOGETHER</h2>
        
        <Link 
          to="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem 0.8rem 2rem',
            background: 'transparent',
            border: '1px solid #444',
            borderRadius: '50px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#fff'
            e.currentTarget.style.color = '#000'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#fff'
          }}
        >
          CONTACT
          <span style={{
            width: '36px',
            height: '36px',
            background: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '0.5rem'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </span>
        </Link>
      </section>

      {/* Footer Links Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        padding: '4rem 5%',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Logo & Social */}
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <span style={{ 
              color: '#fff', 
              fontSize: '1.2rem', 
              fontWeight: '700' 
            }}>MECHGUST</span>
            <span style={{
              padding: '0.25rem 0.5rem',
              background: '#1a1a1a',
              borderRadius: '4px',
              fontSize: '0.7rem',
              color: '#888'
            }}>'26</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{
              width: '32px',
              height: '32px',
              background: '#1a1a1a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{
              width: '32px',
              height: '32px',
              background: '#1a1a1a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" style={{
              width: '32px',
              height: '32px',
              background: '#1a1a1a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
          
          <p style={{ 
            color: '#666', 
            fontSize: '0.9rem', 
            lineHeight: '1.6',
            maxWidth: '280px'
          }}>
            Beautiful design has the power to captivate audiences.
          </p>
        </div>

        {/* Main Links */}
        <div>
          <h4 style={{
            color: '#888',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>MAIN</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Home', 'About', 'Events', 'Works'].map((item) => (
              <li key={item} style={{ marginBottom: '0.75rem' }}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={{
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#888'}
                  onMouseOut={(e) => e.target.style.color = '#f5f5f5'}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages Links */}
        <div>
          <h4 style={{
            color: '#888',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>PAGES</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Contact', 'Tech Events', 'Workshops', 'Online Events'].map((item) => (
              <li key={item} style={{ marginBottom: '0.75rem' }}>
                <Link 
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  style={{
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#888'}
                  onMouseOut={(e) => e.target.style.color = '#f5f5f5'}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            color: '#888',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>QUICK LINKS</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Non-Tech Events', 'Register', 'Schedule', 'Gallery'].map((item) => (
              <li key={item} style={{ marginBottom: '0.75rem' }}>
                <Link 
                  to={item === 'Non-Tech Events' ? '/nontech' : `/${item.toLowerCase()}`}
                  style={{
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#888'}
                  onMouseOut={(e) => e.target.style.color = '#f5f5f5'}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid #1a1a1a',
        padding: '1.5rem 5%',
        textAlign: 'center'
      }}>
        <p style={{ 
          color: '#444', 
          fontSize: '0.85rem',
          margin: 0
        }}>
          © 2026 MECHGUST. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

```

`src/components/HeroSection.jsx`:

```jsx
import React from 'react'
import SpacemanScene from './SpacemanScene'

export default function HeroSection(){
  return (
    <section className="hero-section" style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="hero-bg"></div>
      
      {/* Hero content positioned at top-left where spaceman looks */}
      <div className="hero-content-wrapper" style={{
        position: 'absolute',
        top: '12%',
        left: '5%',
        zIndex: 2,
        maxWidth: '60%'
      }}>
        
        <div className="hero-subheading-flex">
          <img
            alt="fingerprint"
            src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67024792d09f3730c4f72330_fingerprint.svg"
            className="icon-small"
          />
          <h5>Welcome to MECHGUST'26</h5>
        </div>
        
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 120px)',
          fontWeight: '800',
          color: '#fff',
          letterSpacing: '-0.02em',
          lineHeight: '0.9',
          textTransform: 'uppercase',
          margin: '0.5rem 0'
        }}>THE SILVER  ERA</h1>
        
        <p className="max-width-25vw" style={{ color: '#888', marginTop: '1rem' }}>
          From Concept to Creation — Beautiful design has the power to captivate audiences.
        </p>
        
        <a href="#learn-more" className="arrow-border-wrapper w-inline-block" style={{ marginTop: '1.5rem' }}>
          <div className="icon-wrapper-small">
            <img
              alt="icon"
              src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670242c3a96327a0b710be85_Icon.svg"
              className="button-icon"
            />
          </div>
        </a>
      </div>
      
      {/* Spaceman - placed after content so it appears below on mobile */}
      <SpacemanScene className="spline" />
      
      {/* Bottom cards */}
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        zIndex: 2
      }}>
        <div className="hero-flex">
          <div className="hero-cards-wrapper">
            <div className="hero-card">
              <div className="avatars-flex">
                <div className="avatar-a">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea69fc_Team3.jpg"
                    className="avatar-image"
                  />
                </div>
                <div className="avatar-b">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3c_Team2.jpg"
                    className="avatar-image"
                  />
                </div>
                <div className="avatar-c">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6a3e_Team1.jpg"
                    className="avatar-image"
                  />
                </div>
              </div>
              <h5>1.7k+ Clients</h5>
            </div>
          </div>
          <div className="hero-cards-wrapper">
            <div className="hero-card">
              <div className="hero-text-flex">
                <h4 className="hero-card-title">3K</h4>
                <h5>Works</h5>
                <img
                  src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670239a571ef993ea919efd4_Arrow.svg"
                  alt="arrow"
                  className="hero-icon"
                />
              </div>
              <div className="hero-card-image">
                <img
                  src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/670229a75f4844ac9d8daa0a_Services-p-500.jpg"
                  alt="gadgets on a white table"
                  className="hero-card-image-back"
                />
                <img
                  src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67038dd51127140791a4bc7c_PosterMockup-p-500.jpg"
                  alt="poster mock up"
                  className="hero-card-image-front"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-overlay"></div>
    </section>
  )
}

```

`src/components/MetricsSection.jsx`:

```jsx
import React from 'react'

export default function MetricsSection(){
  return (
    <section id="Metrics" className="section">
      <div className="w-layout-blockcontainer container padding-9rem w-container">
        <div className="space-4rem"></div>
        <div className="metrics-wrapper">
          <div className="metrics-text-block">
            <div className="hero-subheading-flex">
              <img
                alt="fingerprint"
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67024792d09f3730c4f72330_fingerprint.svg"
                className="icon-small"
              />
              <h5>Events</h5>
            </div>
            <h2 className="metrics-text">25+</h2>
          </div>
          <div className="metrics-text-block">
            <div className="hero-subheading-flex">
              <img
                alt="icon light"
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6702441c652606ecea9f2d56_Icon%20Light.svg"
                className="icon-small"
              />
              <h5>Participants</h5>
            </div>
            <h2 className="metrics-text">2500+</h2>
          </div>
          <div className="metrics-text-block">
            <div className="hero-subheading-flex">
              <img
                alt="icon thunder"
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67028ec19de9795a1a8b34f9_svg_w2Td.svg"
                className="icon-small"
              />
              <h5>Prizes</h5>
            </div>
            <h2 className="metrics-text">20K+</h2>
          </div>
        </div>
        <div className="space-4rem"></div>
      </div>
    </section>
  )
}

```

`src/components/Navbar.jsx`:

```jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/contact', label: 'CONTACT' }
  ]

  return (
    <nav className="navbar w-nav" role="banner">
      <Link to="/" className="logo-link-wrapper w-nav-brand">
        <img
          src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6703898cb9ed6a04ab83c37b_panorama_photosphere.svg"
          alt="logo"
          className="logo"
        />
      </Link>
      <div className="nav-container w-container">
        <nav role="navigation" className="nav-menu w-nav-menu">
          {navLinks.map(link => (
            <div key={link.path} className="nav-link-wrapper">
              <Link 
                to={link.path} 
                className={`nav-link w-nav-link ${location.pathname === link.path ? 'w--current' : ''}`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="hide-on-mobile">
          <Link to="/about" className="button-with-circle-icon w-inline-block">
            <div className="button-flex">
              <p className="button-text">ABOUT US</p>
              <p className="button-text-absolute">ABOUT US</p>
            </div>
            <div className="button-arrow-wrapper">
              <img
                alt=""
                src="https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6af8_arrow_outward.svg"
                className="button-icon"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

```

`src/components/Nontech.jsx`:

```jsx
import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Nontech() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    // Load AOS library for scroll-based animations
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@next/dist/aos.js'
    script.async = true
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      })
    }
    document.body.appendChild(script)

    // Add AOS CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/aos@next/dist/aos.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Intersection Observer for scroll-based reveals (better performance)
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target)
          setVisibleCards(prev => new Set([...prev, index]))
          observer.unobserve(entry.target)
        }
      })
    }, options)

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])
  const work = {
    title: 'NON - TECHNICAL',
    category: 'Marketing',
    client: 'Mutil-Digital Capita',
    date: 'March 15, 2024',
    description: 'We embrace the latest trends, technology, and forward-thinking approaches to deliver sleek solutions.',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    objectives: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    scopeItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    events: [
      { letter: 'A', label: 'IPL AUCTION',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-ipl-auction' },
      { letter: 'B', label: 'CONNECTIONS',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-connections' },
      { letter: 'C', label: 'GRAB A MINUTE',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-grab-a-minute' },
      { letter: 'D', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-guess-lyrics' },
      { letter: 'E', label: 'PICTO SCAVENGER HUNT', image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-scavenger-hunt' },
      { letter: 'F', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-guess-lyrics-2' },
      { letter: 'G', label: 'POSTER DESIGN',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-poster-design' },
      { letter: 'H', label: 'TREASURE HUNT',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-treasure-hunt' },
      { letter: 'I', label: 'SQUID GAME RELAY',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-squid-game' },
      { letter: 'J', label: 'SCRIBBLE',             image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/nontech-scribble' }
    ]
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close work detail"
      >✕ Close</button>

      <section className="events-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="events-title">{work.title} EVENTS</h2>

          <div className="events-grid">
            {work.events.map((event, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className={`event-card ${visibleCards.has(i) ? 'visible' : ''} ${event.isRed ? 'red-event' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
                data-aos={i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                data-aos-delay={`${i * 50}`}
                data-aos-duration="800"
              >
                {/* Left Content */}
                <div className="event-content">
                  <h3 className="event-section-title">DESCRIPTION</h3>
                  <p className="event-description">{event.description}</p>

                  <h3 className="event-section-title">RULES</h3>
                  <ul className="event-rules">
                    {event.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="rule-item">• {rule}</li>
                    ))}
                  </ul>

                  <a 
                    href={event.formLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="register-btn"
                  >
                    REGISTER NOW
                  </a>
                </div>

                {/* Right Image */}
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.label}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/components/Onlineevents.jsx`:

```jsx
import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Onlineevents() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    // Load AOS library for scroll-based animations
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@next/dist/aos.js'
    script.async = true
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      })
    }
    document.body.appendChild(script)

    // Add AOS CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/aos@next/dist/aos.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Intersection Observer for scroll-based reveals (better performance)
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target)
          setVisibleCards(prev => new Set([...prev, index]))
          observer.unobserve(entry.target)
        }
      })
    }, options)

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])
  const work = {
    title: 'ONLINE EVENTS',
    category: 'Marketing',
    client: 'Mutil-Digital Capita',
    date: 'March 15, 2024',
    description: 'We embrace the latest trends, technology, and forward-thinking approaches to deliver sleek solutions.',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    objectives: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    scopeItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    events: [
      { letter: 'A', label: 'IPL AUCTION',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-ipl-auction' },
      { letter: 'B', label: 'CONNECTIONS',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-connections' },
      { letter: 'C', label: 'GRAB A MINUTE',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-grab-a-minute' },
      { letter: 'D', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-guess-lyrics' },
      { letter: 'E', label: 'PICTO SCAVENGER HUNT', image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-scavenger-hunt' },
      { letter: 'F', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-guess-lyrics-2' },
      { letter: 'G', label: 'POSTER DESIGN',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-poster-design' },
      { letter: 'H', label: 'TREASURE HUNT',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-treasure-hunt' },
      { letter: 'I', label: 'SQUID GAME RELAY',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-squid-game' },
      { letter: 'J', label: 'SCRIBBLE',             image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/online-scribble' }
    ]
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close work detail"
      >✕ Close</button>

      <section className="events-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="events-title">{work.title} EVENTS</h2>

          <div className="events-grid">
            {work.events.map((event, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className={`event-card ${visibleCards.has(i) ? 'visible' : ''} ${event.isRed ? 'red-event' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
                data-aos={i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                data-aos-delay={`${i * 50}`}
                data-aos-duration="800"
              >
                {/* Left Content */}
                <div className="event-content">
                  <h3 className="event-section-title">DESCRIPTION</h3>
                  <p className="event-description">{event.description}</p>

                  <h3 className="event-section-title">RULES</h3>
                  <ul className="event-rules">
                    {event.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="rule-item">• {rule}</li>
                    ))}
                  </ul>

                  <a 
                    href={event.formLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="register-btn"
                  >
                    REGISTER NOW
                  </a>
                </div>

                {/* Right Image */}
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.label}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/components/OriginalContent.jsx`:

```jsx
import React, {useEffect, useState} from 'react'

export default function OriginalContent(){
  const [html, setHtml] = useState('')

  useEffect(()=>{
    let cancelled = false
    async function load(){
      try{
        const res = await fetch('/3d-bento-webflow-template.webflow.io/index.html')
        const text = await res.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(text, 'text/html')

        // Append head styles/scripts (avoid duplicates)
        doc.head.querySelectorAll('link[rel="stylesheet"]').forEach(link =>{
          const href = link.getAttribute('href')
          if(!document.querySelector(`link[href="${href}"]`)){
            const l = document.createElement('link')
            l.rel = 'stylesheet'
            l.href = href
            l.setAttribute('data-origin-href', href)
            document.head.appendChild(l)
          }
        })

        // Append head scripts
        const headScripts = Array.from(doc.head.querySelectorAll('script'))
        headScripts.forEach(s=>{
          const src = s.getAttribute('src')
          if(src){
            if(!document.querySelector(`script[src="${src}"]`)){
              const sc = document.createElement('script')
              sc.src = src
              sc.async = false
              document.body.appendChild(sc)
            }
          } else if(s.textContent && s.textContent.trim()){
            const sc = document.createElement('script')
            sc.text = s.textContent
            document.body.appendChild(sc)
          }
        })

        const bodyHtml = doc.body.innerHTML
        if(!cancelled) setHtml(bodyHtml)

        // Execute body scripts after injection
        setTimeout(()=>{
          const bodyScripts = Array.from(doc.body.querySelectorAll('script'))
          bodyScripts.forEach(s=>{
            const src = s.getAttribute('src')
            if(src){
              if(!document.querySelector(`script[src="${src}"]`)){
                const sc = document.createElement('script')
                sc.src = src
                sc.async = false
                document.body.appendChild(sc)
              }
            } else if(s.textContent && s.textContent.trim()){
              const sc = document.createElement('script')
              sc.text = s.textContent
              document.body.appendChild(sc)
            }
          })
        }, 0)

      }catch(err){
        console.error('Failed to load original HTML', err)
      }
    }
    load()
    return ()=> cancelled = true
  }, [])

  return <div dangerouslySetInnerHTML={{__html: html}} />
}

```

`src/components/SpacemanScene.jsx`:

```jsx
import React, {useEffect, useRef, useState} from 'react'

/**
 * SpacemanScene - Renders the interactive astronaut/spaceman 3D scene
 * Optimized for performance with lazy loading and mobile detection
 */
export default function SpacemanScene({className = 'spline'}){
  const containerRef = useRef(null)
  const appRef = useRef(null)
  const splineRuntimeRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 991 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Load and initialize Spline runtime (only on desktop)
  useEffect(()=>{
    // Skip loading 3D on mobile devices
    if (isMobile) {
      setIsLoading(false)
      return
    }

    // Simulate initial progress
    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + Math.random() * 15
      })
    }, 500)

    const loadSplineAndRender = async ()=>{
      try {
        // Dynamically import Spline runtime
        if (!window.Spline) {
          const splineModule = await import('https://unpkg.com/@splinetool/runtime@1.12.29/build/runtime.js')
          window.Spline = splineModule
          splineRuntimeRef.current = splineModule
        }

        if (!containerRef.current) return

        const { Application } = window.Spline
        const canvas = containerRef.current.querySelector('canvas')
        
        if (!canvas) {
          console.error('Canvas element not found in container')
          return
        }

        // Create and initialize the Spline application
        const splineApp = new Application(canvas)
        
        // Load the spaceman/astronaut scene
        await splineApp.load('https://prod.spline.design/rNxf6T0SBLTAKJDp/scene.splinecode')
        
        appRef.current = splineApp
        setLoadProgress(100)
        
        // Small delay for smooth transition
        setTimeout(() => {
          setIsLoading(false)
        }, 300)
        
        // Dispatch load event (mimics Webflow behavior)
        const loadEvent = new Event('w-spline-load')
        containerRef.current.dispatchEvent(loadEvent)
        
        // Add loaded class for styling
        containerRef.current.classList.add('spline-loaded')
        
      } catch(error) {
        console.error('Spline initialization failed:', error)
        setIsLoading(false)
        clearInterval(progressInterval)
      }
    }

    // Delay loading slightly to prioritize critical content
    const loadTimer = setTimeout(loadSplineAndRender, 100)

    return ()=>{
      clearTimeout(loadTimer)
      clearInterval(progressInterval)
      // Cleanup on unmount
      if (appRef.current?.dispose) {
        try {
          appRef.current.dispose()
        } catch(err) {
          console.warn('Error disposing Spline app:', err)
        }
      }
    }
  }, [isMobile])

  // Add mouse tracking for parallax effect
  useEffect(()=>{
    const handleMouseMove = (e)=>{
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      
      // Calculate normalized position relative to container
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      
      // Normalize to -1 to 1 range
      const normalizedX = distX / (rect.width / 2)
      const normalizedY = distY / (rect.height / 2)
      
      // Calculate rotation angles
      const rotateX = normalizedY * 10
      const rotateY = normalizedX * 10
      
      // Apply 3D perspective transform
      containerRef.current.style.transform = `
        perspective(1200px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(1.0)
      `
      containerRef.current.style.transition = 'transform 0.1s ease-out'
    }

    const handleMouseLeave = ()=>{
      if (containerRef.current) {
        containerRef.current.style.transform = `
          perspective(1200px) 
          rotateX(0deg) 
          rotateY(0deg) 
          scale(1.0)
        `
        containerRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave)

    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Mobile fallback - show static rocket image instead of 3D
  if (isMobile) {
    return (
      <div 
        className={className}
        style={{
          width: '300px',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, transparent 70%)',
          overflow: 'visible',
          margin: '0 auto'
        }}
      >
        {/* SVG Rocket for better Firefox compatibility */}
        <svg 
          width="200" 
          height="200" 
          viewBox="0 0 512 512" 
          style={{
            opacity: 0.9,
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <defs>
            <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#e8e8e8'}} />
              <stop offset="100%" style={{stopColor: '#a0a0a0'}} />
            </linearGradient>
            <linearGradient id="rocketWindow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#64b5f6'}} />
              <stop offset="100%" style={{stopColor: '#1976d2'}} />
            </linearGradient>
            <linearGradient id="rocketFire" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ff9800'}} />
              <stop offset="50%" style={{stopColor: '#f44336'}} />
              <stop offset="100%" style={{stopColor: '#ff5722'}} />
            </linearGradient>
          </defs>
          {/* Rocket body */}
          <ellipse cx="256" cy="200" rx="80" ry="160" fill="url(#rocketBody)" />
          {/* Rocket tip */}
          <path d="M256 40 L200 120 L312 120 Z" fill="#e53935" />
          {/* Window */}
          <circle cx="256" cy="180" r="35" fill="url(#rocketWindow)" />
          <circle cx="256" cy="180" r="25" fill="#bbdefb" opacity="0.5" />
          {/* Left fin */}
          <path d="M176 280 L130 380 L176 340 Z" fill="#e53935" />
          {/* Right fin */}
          <path d="M336 280 L382 380 L336 340 Z" fill="#e53935" />
          {/* Bottom fin */}
          <ellipse cx="256" cy="360" rx="40" ry="20" fill="#c62828" />
          {/* Fire/exhaust */}
          <ellipse cx="256" cy="400" rx="30" ry="60" fill="url(#rocketFire)" opacity="0.9" />
          <ellipse cx="256" cy="420" rx="20" ry="40" fill="#ffeb3b" opacity="0.8" />
          {/* Stars decoration */}
          <circle cx="100" cy="100" r="3" fill="#fff" opacity="0.6" />
          <circle cx="400" cy="80" r="2" fill="#fff" opacity="0.5" />
          <circle cx="450" cy="200" r="4" fill="#fff" opacity="0.4" />
          <circle cx="80" cy="300" r="2" fill="#fff" opacity="0.6" />
          <circle cx="420" cy="350" r="3" fill="#fff" opacity="0.5" />
        </svg>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-10deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={className}
      data-animation-type="spline"
      data-spline-url="https://prod.spline.design/rNxf6T0SBLTAKJDp/scene.splinecode"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
      onMouseEnter={(e)=>{
        // Add interaction hint
        e.currentTarget.style.cursor = 'grab'
      }}
      onMouseLeave={(e)=>{
        e.currentTarget.style.cursor = 'default'
      }}
    >
      {/* Loading indicator */}
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 10
        }}>
          <div style={{
            fontSize: '48px',
            animation: 'pulse 2s ease-in-out infinite'
          }}>🚀</div>
          <div style={{
            width: '120px',
            height: '4px',
            background: '#333',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${loadProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: '2px',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{
            color: '#666',
            fontSize: '12px',
            fontFamily: 'system-ui'
          }}>Loading 3D Scene...</div>
          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.1); opacity: 0.7; }
            }
          `}</style>
        </div>
      )}
      <canvas
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-out'
        }}
      />
    </div>
  )
}

```

`src/components/SplineObject.jsx`:

```jsx
import React, {useEffect, useRef, useState} from 'react'

export default function SplineObject({splineUrl, animationType, className}){
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({x: 0, y: 0})
  const appRef = useRef(null)
  const splineInstanceRef = useRef(null)

  // Load Spline runtime once globally
  useEffect(()=>{
    const loadSplineRuntime = async ()=>{
      if (!window.Spline) {
        try {
          const module = await import('https://unpkg.com/@splinetool/runtime@1.12.29/build/runtime.js')
          window.Spline = module
        } catch(err) {
          console.error('Failed to load Spline runtime:', err)
        }
      }
    }
    loadSplineRuntime()
  }, [])

  // Initialize Spline app when URL is provided
  useEffect(()=>{
    if (!splineUrl || !containerRef.current || appRef.current) return

    const initSpline = async ()=>{
      try {
        // Wait for Spline runtime to be available
        let attempts = 0
        while (!window.Spline && attempts < 50) {
          await new Promise(resolve => setTimeout(resolve, 100))
          attempts++
        }

        if (!window.Spline) {
          throw new Error('Spline runtime not loaded')
        }

        const { Application } = window.Spline
        const canvas = containerRef.current?.querySelector('canvas')
        
        if (!canvas) return

        const app = new Application(canvas)
        await app.load(splineUrl)
        
        appRef.current = app
        splineInstanceRef.current = app
        
        // Dispatch custom event (like Webflow does)
        containerRef.current.dispatchEvent(new Event('w-spline-load'))
        
        // Add animation class after load
        containerRef.current.classList.add('spline-loaded')
        
      } catch(err) {
        console.error('Spline initialization error:', err)
        if (containerRef.current) {
          containerRef.current.innerHTML = '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-family: system-ui; text-align: center;"><div><div style="font-size: 48px; margin-bottom: 10px;">✨</div><div>3D Object Loading...</div></div></div>'
        }
      }
    }

    initSpline()

    return ()=>{
      // Cleanup on unmount
      if (splineInstanceRef.current?.dispose) {
        splineInstanceRef.current.dispose()
      }
    }
  }, [splineUrl])

  // Mouse tracking for parallax effect
  useEffect(()=>{
    const handleMouseMove = (e)=>{
      if (!containerRef.current) return
      
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePos({x, y})

      // Apply parallax transform using 3D perspective
      const rotateX = y * 8  // Increased sensitivity
      const rotateY = x * 8
      
      containerRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.0)`
      containerRef.current.style.transition = 'transform 0.08s ease-out'
    }

    const handleMouseLeave = ()=>{
      if (containerRef.current) {
        containerRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1.0)'
        containerRef.current.style.transition = 'transform 0.5s ease-out'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave)

    return ()=>{
      window.removeEventListener('mousemove', handleMouseMove)
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      data-animation-type={animationType}
      data-spline-url={splineUrl}
      style={{
        transition: 'transform 0.08s ease-out',
        transformStyle: 'preserve-3d',
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      <canvas 
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: 0,
          animation: 'fadeIn 1s ease-out 0.3s forwards'
        }}
      ></canvas>
    </div>
  )
}

```

`src/components/Tech.jsx`:

```jsx
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Tech() {
  const navigate = useNavigate()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    // Load AOS library for scroll-based animations
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@next/dist/aos.js'
    script.async = true
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      })
    }
    document.body.appendChild(script)

    // Add AOS CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/aos@next/dist/aos.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Intersection Observer for scroll-based reveals (better performance)
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target)
          setVisibleCards(prev => new Set([...prev, index]))
          observer.unobserve(entry.target)
        }
      })
    }, options)

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])
  const work = {
    title: 'TECHNICAL',
    category: 'Marketing',
    client: 'Mutil-Digital Capita',
    date: 'March 15, 2024',
    description: 'We embrace the latest trends, technology, and forward-thinking approaches to deliver sleek solutions.',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    objectives: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    scopeItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    events: [
      { letter: 'A', label: 'IPL AUCTION',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-ipl-auction' },
      { letter: 'B', label: 'CONNECTIONS',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-connections' },
      { letter: 'C', label: 'GRAB A MINUTE',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-grab-a-minute' },
      { letter: 'D', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-guess-lyrics' },
      { letter: 'E', label: 'PICTO SCAVENGER HUNT', image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-scavenger-hunt' },
      { letter: 'F', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-guess-lyrics-2' },
      { letter: 'G', label: 'POSTER DESIGN',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-poster-design' },
      { letter: 'H', label: 'TREASURE HUNT',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-treasure-hunt' },
      { letter: 'I', label: 'SQUID GAME RELAY',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-squid-game' },
      { letter: 'J', label: 'SCRIBBLE',             image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/tech-scribble' }
    ]
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close work detail"
      >✕ Close</button>

      <section className="events-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="events-title">{work.title} EVENTS</h2>

          <div className="events-grid">
            {work.events.map((event, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className={`event-card ${visibleCards.has(i) ? 'visible' : ''} ${event.isRed ? 'red-event' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
                data-aos={i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                data-aos-delay={`${i * 50}`}
                data-aos-duration="800"
              >
                {/* Left Content */}
                <div className="event-content">
                  <h3 className="event-section-title">DESCRIPTION</h3>
                  <p className="event-description">{event.description}</p>

                  <h3 className="event-section-title">RULES</h3>
                  <ul className="event-rules">
                    {event.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="rule-item">• {rule}</li>
                    ))}
                  </ul>

                  <a 
                    href={event.formLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="register-btn"
                  >
                    REGISTER NOW
                  </a>
                </div>

                {/* Right Image */}
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.label}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/components/WorkDetail.css`:

```css
/* ============================================
   WORK DETAIL ANIMATIONS & STYLES
   Performance-optimized for college symposium
   ============================================ */

/* CSS Custom Properties for easy theming */
:root {
  --primary-color: #ffffff;
  --secondary-color: #999999;
  --accent-red: #ff0000;
  --bg-dark: #000000;
  --border-light: rgba(255, 255, 255, 0.3);
  --border-hover: rgba(255, 255, 255, 0.5);
  --transition-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ============================================
   KEYFRAME ANIMATIONS
   ============================================ */

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7), inset 0 0 0 0 rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(255, 255, 255, 0), inset 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
}

@keyframes pulseGlowRed {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7), inset 0 0 0 0 rgba(255, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(255, 0, 0, 0), inset 0 0 0 2px rgba(255, 0, 0, 0.2);
  }
}

@keyframes imageZoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bgGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-15px) translateX(15px);
  }
}

/* ============================================
   PAGE CONTAINER
   ============================================ */

.work-detail-page {
  background: linear-gradient(-45deg, #000000, #0a0a0a, #1a1a1a, #0a0a0a);
  background-size: 400% 400%;
  animation: bgGradient 15s ease infinite;
  color: var(--primary-color);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* Subtle animated background particles effect */
.work-detail-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.02) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
  animation: float 20s ease-in-out infinite;
}

.work-detail-page > * {
  position: relative;
  z-index: 2;
}

/* ============================================
   CLOSE BUTTON
   ============================================ */

.close-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  will-change: transform, background-color;
  animation: slideInUp 0.6s ease-out;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.close-button:active {
  transform: scale(0.98);
}

/* Mobile */
@media (max-width: 640px) {
  .close-button {
    top: 15px;
    right: 15px;
    padding: 8px 16px;
    font-size: 14px;
  }
}

/* ============================================
   EVENTS SECTION
   ============================================ */

.events-section {
  padding: 120px 20px;
  background: var(--bg-dark);
}

@media (max-width: 768px) {
  .events-section {
    padding: 80px 20px;
  }
}

@media (max-width: 640px) {
  .events-section {
    padding: 60px 16px;
  }
}

/* ============================================
   SECTION TITLE
   ============================================ */

.events-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: center;
  background: linear-gradient(135deg, #fff 0%, #999 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideInUp 0.8s ease-out;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .events-title {
    font-size: 48px;
    margin-bottom: 60px;
  }
}

@media (max-width: 640px) {
  .events-title {
    font-size: 36px;
    margin-bottom: 40px;
  }
}

/* ============================================
   EVENTS GRID
   ============================================ */

.events-grid {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

@media (max-width: 768px) {
  .events-grid {
    gap: 48px;
  }
}

@media (max-width: 640px) {
  .events-grid {
    gap: 36px;
  }
}

/* ============================================
   EVENT CARD
   ============================================ */

.event-card {
  border: 2px dashed var(--border-light);
  border-radius: 20px;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, border-color, box-shadow, background-color;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Scroll-based reveal */
.event-card.visible {
  animation: slideInUp 0.6s ease-out forwards !important;
}

.event-card:hover {
  border-color: var(--primary-color);
  border-style: solid;
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(255, 255, 255, 0.15);
}

/* Red event variant */
.event-card.red-event:hover {
  border-color: var(--accent-red);
  box-shadow: 0 24px 48px rgba(255, 0, 0, 0.25);
}

/* Mobile grid adaptation */
@media (max-width: 1024px) {
  .event-card {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .event-card {
    border-radius: 16px;
    padding: 24px;
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .event-card {
    border-radius: 12px;
    padding: 20px;
    gap: 16px;
  }
}

/* ============================================
   EVENT CONTENT (LEFT COLUMN)
   ============================================ */

.event-content {
  /* Content always visible */
}

.event-section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 2px;
  color: var(--primary-color);
  transition: all 0.3s ease;
  margin-top: 0;
}

.event-section-title:first-child {
  margin-top: 0;
}

.event-description {
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: var(--secondary-color);
  transition: all 0.3s ease;
  white-space: pre-line;
}

@media (max-width: 768px) {
  .event-section-title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .event-description {
    font-size: 13px;
    margin-bottom: 24px;
  }
}

/* ============================================
   EVENT RULES
   ============================================ */

.event-rules {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.rule-item {
  font-size: 14px;
  color: var(--secondary-color);
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.rule-item:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .rule-item {
    font-size: 13px;
    margin-bottom: 6px;
  }
}

/* ============================================
   REGISTER BUTTON
   ============================================ */

.register-btn {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: var(--primary-color);
  padding: 12px 40px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s var(--transition-ease);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}

.register-btn:hover {
  background: var(--primary-color);
  color: var(--bg-dark);
  border-color: var(--primary-color);
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.register-btn:active {
  transform: scale(0.98);
}

.event-card.red-event .register-btn:hover {
  background: var(--accent-red);
  border-color: var(--accent-red);
  color: var(--primary-color);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .register-btn {
    padding: 10px 32px;
    font-size: 11px;
  }
}

/* ============================================
   EVENT IMAGE (RIGHT COLUMN)
   ============================================ */

.event-image-wrapper {
  position: relative;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  will-change: transform;
  background: #1a1a1a;
}

@media (max-width: 1024px) {
  .event-image-wrapper {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .event-image-wrapper {
    height: 200px;
  }
}

@media (max-width: 640px) {
  .event-image-wrapper {
    height: 180px;
  }
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.event-image-wrapper:hover .event-image {
  transform: scale(1.1);
}

/* Image overlay for depth */
.image-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent);
  pointer-events: none;
  z-index: 1;
}

/* ============================================
   ACCESSIBILITY
   ============================================ */

/* ============================================
   ALTERNATING CARD ANIMATIONS (for AOS)
   ============================================ */

/* Odd cards: fade in from left */
.event-card:nth-child(odd) {
  animation: slideInLeft 0.8s ease-out forwards;
}

/* Even cards: fade in from right */
.event-card:nth-child(even) {
  animation: slideInRight 0.8s ease-out forwards;
}

/* Reset for scroll-based reveals */
.event-card.visible {
  animation-play-state: running !important;
}

/* ============================================
   ACCESSIBILITY & REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  .work-detail-page {
    animation: none !important;
  }

  .work-detail-page::before {
    animation: none !important;
  }

  .event-card,
  .event-content,
  .rule-item,
  .register-btn,
  .event-image-wrapper,
  .event-image,
  .close-button,
  .events-title {
    animation: none !important;
    transition: color 0.3s ease, background-color 0.3s ease !important;
  }
}

/* ============================================
   PERFORMANCE OPTIMIZATIONS
   ============================================ */

/* GPU acceleration for smooth animations */
.event-card,
.event-image,
.register-btn,
.close-button {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Reduce animation on mobile devices */
@media (max-width: 640px) {
  .event-card {
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }

  .event-image:hover {
    transform: scale(1.05);
  }
}

```

`src/components/WorksSection.jsx`:

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SplineObject from './SplineObject'

export default function WorksSection() {
  const navigate = useNavigate()
  
  const works = [
    {
      id: 'nontech',
      label: 'Non-Technical',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279c5ed785cf3f5e8ae91_Works1.webp'
    },
    {
      id: 'tech',
      label: 'Technical',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279e81cd620f266f83dce_Works2.webp'
    },
    {
      id: 'workshops',
      label: 'Workshops',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279f98647f3b8c72705df_Works3.webp'
    },
    {
      id: 'onlineevents',
      label: 'Online Events',
      image: 'https://cdn.prod.website-files.com/67021bf42ce586086aea69e3/670279c5ed785cf3f5e8ae91_Works1.webp'
    }
  ]

  return (
    <>
      <section className="section relative">
        <div className="w-layout-blockcontainer container justify-bottom w-container">
          <div className="page-title-wrapper">
            <div className="page-title-block">
              <h5>INSIDE THE</h5>
              <div className="page-title-flex">
                <h1 className="large-title">SILVER</h1>
                <h1 className="large-title outline-white">ERA</h1>
              </div>
            </div>
            <div className="space-2rem hide-on-tab"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-dyn-list">
            <div role="list" className="works-block w-dyn-items">
              {works.map(work => (
                <div key={work.id} role="listitem" className="works-wrapper w-dyn-item">
                  <button
                    onClick={() => navigate(`/${work.id}`)}
                    className="works-link-wrapper w-inline-block"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div className="works-image-wrapper">
                      <img
                        src={work.image}
                        alt={work.id}
                        className="works-image"
                      />
                      <div className="works-cut-out"></div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-8rem"></div>
      </section>

      <SplineObject
        splineUrl="https://prod.spline.design/J6fFldz3YOndaynA/scene.splinecode"
        animationType="spline"
        className="spline-tab-down"
      />
    </>
  )
}

```

`src/components/Workshops.jsx`:

```jsx
import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './WorkDetail.css'

export default function Workshops() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    // Load AOS library for scroll-based animations
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@next/dist/aos.js'
    script.async = true
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      })
    }
    document.body.appendChild(script)

    // Add AOS CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/aos@next/dist/aos.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Intersection Observer for scroll-based reveals (better performance)
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target)
          setVisibleCards(prev => new Set([...prev, index]))
          observer.unobserve(entry.target)
        }
      })
    }, options)

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])
  const work = {
    title: 'WORKSHOPS',
    category: 'Marketing',
    client: 'Mutil-Digital Capita',
    date: 'March 15, 2024',
    description: 'We embrace the latest trends, technology, and forward-thinking approaches to deliver sleek solutions.',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    objectives: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    scopeItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    events: [
      { letter: 'A', label: 'IPL AUCTION',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-ipl-auction' },
      { letter: 'B', label: 'CONNECTIONS',          image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-connections' },
      { letter: 'C', label: 'GRAB A MINUTE',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-grab-a-minute' },
      { letter: 'D', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-guess-lyrics' },
      { letter: 'E', label: 'PICTO SCAVENGER HUNT', image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-scavenger-hunt' },
      { letter: 'F', label: 'GUESS THE LYRICS',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-guess-lyrics-2' },
      { letter: 'G', label: 'POSTER DESIGN',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-poster-design' },
      { letter: 'H', label: 'TREASURE HUNT',        image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-treasure-hunt' },
      { letter: 'I', label: 'SQUID GAME RELAY',     image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-squid-game' },
      { letter: 'J', label: 'SCRIBBLE',             image: 'events/image.jpg', description: 'Lorem ipsum dolor sext cun text dust\nLorem ipsum text', rules: ['Lorem ipsum dolor sext', 'Lorem ipsum text dust', 'Lorem ipsum text'], formLink: 'https://forms.google.com/workshop-scribble' }
    ]
  }

  return (
    <div className="work-detail-page">
      <button
        onClick={() => navigate('/')}
        className="close-button"
        aria-label="Close work detail"
      >✕ Close</button>

      <section className="events-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="events-title">{work.title} EVENTS</h2>

          <div className="events-grid">
            {work.events.map((event, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className={`event-card ${visibleCards.has(i) ? 'visible' : ''} ${event.isRed ? 'red-event' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
                data-aos={i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                data-aos-delay={`${i * 50}`}
                data-aos-duration="800"
              >
                {/* Left Content */}
                <div className="event-content">
                  <h3 className="event-section-title">DESCRIPTION</h3>
                  <p className="event-description">{event.description}</p>

                  <h3 className="event-section-title">RULES</h3>
                  <ul className="event-rules">
                    {event.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="rule-item">• {rule}</li>
                    ))}
                  </ul>

                  <a 
                    href={event.formLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="register-btn"
                  >
                    REGISTER NOW
                  </a>
                </div>

                {/* Right Image */}
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.label}
                    className="event-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

```

`src/main.jsx`:

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './animations.css'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

```

`src/styles.css`:

```css
html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-family: sans-serif;
}

body {
    margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
    display: block;
}

audio,
canvas,
progress,
video {
    vertical-align: baseline;
    display: inline-block;
}

audio:not([controls]) {
    height: 0;
    display: none;
}

[hidden],
template {
    display: none;
}

a {
    background-color: #0000;
}

a:active,
a:hover {
    outline: 0;
}

abbr[title] {
    border-bottom: 1px dotted;
}

b,
strong {
    font-weight: bold;
}

dfn {
    font-style: italic;
}

h1 {
    margin: .67em 0;
    font-size: 2em;
}

mark {
    color: #000;
    background: #ff0;
}

small {
    font-size: 80%;
}

sub,
sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative;
}

sup {
    top: -.5em;
}

sub {
    bottom: -.25em;
}

img {
    border: 0;
}

svg:not(:root) {
    overflow: hidden;
}

hr {
    box-sizing: content-box;
    height: 0;
}

pre {
    overflow: auto;
}

code,
kbd,
pre,
samp {
    font-family: monospace;
    font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}

button {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type="button"],
input[type="reset"] {
    -webkit-appearance: button;
    cursor: pointer;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

input {
    line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

input[type="search"] {
    -webkit-appearance: none;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

legend {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
}

optgroup {
    font-weight: bold;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

td,
th {
    padding: 0;
}

@font-face {
    font-family: webflow-icons;
    src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
    font-weight: normal;
    font-style: normal;
}

[class^="w-icon-"],
[class*=" w-icon-"] {
    speak: none;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    font-family: webflow-icons !important;
}

.w-icon-slider-right:before {
    content: "";
}

.w-icon-slider-left:before {
    content: "";
}

.w-icon-nav-menu:before {
    content: "";
}

.w-icon-arrow-down:before,
.w-icon-dropdown-toggle:before {
    content: "";
}

.w-icon-file-upload-remove:before {
    content: "";
}

.w-icon-file-upload-icon:before {
    content: "";
}

* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    color: #333;
    background-color: #fff;
    min-height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
}

img {
    vertical-align: middle;
    max-width: 100%;
    display: inline-block;
}

html.w-mod-touch * {
    background-attachment: scroll !important;
}

.w-block {
    display: block;
}

.w-inline-block {
    max-width: 100%;
    display: inline-block;
}

.w-clearfix:before,
.w-clearfix:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-clearfix:after {
    clear: both;
}

.w-hidden {
    display: none;
}

.w-button {
    color: #fff;
    line-height: inherit;
    cursor: pointer;
    background-color: #3898ec;
    border: 0;
    border-radius: 0;
    padding: 9px 15px;
    text-decoration: none;
    display: inline-block;
}

input.w-button {
    -webkit-appearance: button;
}

html[data-w-dynpage] [data-w-cloak] {
    color: #0000 !important;
}

.w-code-block {
    margin: unset;
}

pre.w-code-block code {
    all: inherit;
}

.w-optimization {
    display: contents;
}

.w-webflow-badge,
.w-webflow-badge>img {
    box-sizing: unset;
    width: unset;
    height: unset;
    max-height: unset;
    max-width: unset;
    min-height: unset;
    min-width: unset;
    margin: unset;
    padding: unset;
    float: unset;
    clear: unset;
    border: unset;
    border-radius: unset;
    background: unset;
    background-image: unset;
    background-position: unset;
    background-size: unset;
    background-repeat: unset;
    background-origin: unset;
    background-clip: unset;
    background-attachment: unset;
    background-color: unset;
    box-shadow: unset;
    transform: unset;
    direction: unset;
    font-family: unset;
    font-weight: unset;
    color: unset;
    font-size: unset;
    line-height: unset;
    font-style: unset;
    font-variant: unset;
    text-align: unset;
    letter-spacing: unset;
    -webkit-text-decoration: unset;
    text-decoration: unset;
    text-indent: unset;
    text-transform: unset;
    list-style-type: unset;
    text-shadow: unset;
    vertical-align: unset;
    cursor: unset;
    white-space: unset;
    word-break: unset;
    word-spacing: unset;
    word-wrap: unset;
    transition: unset;
}




.w-webflow-badge>img {
    position: unset;
    visibility: unset !important;
    opacity: 1 !important;
    vertical-align: middle !important;
    display: inline-block !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 10px;
    font-weight: bold;
}

h1 {
    margin-top: 20px;
    font-size: 38px;
    line-height: 44px;
}

h2 {
    margin-top: 20px;
    font-size: 32px;
    line-height: 36px;
}

h3 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
}

h4 {
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;
}

h5 {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
}

h6 {
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px;
}

p {
    margin-top: 0;
    margin-bottom: 10px;
}

blockquote {
    border-left: 5px solid #e2e2e2;
    margin: 0 0 10px;
    padding: 10px 20px;
    font-size: 18px;
    line-height: 22px;
}

figure {
    margin: 0 0 10px;
}

figcaption {
    text-align: center;
    margin-top: 5px;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px;
}

.w-list-unstyled {
    padding-left: 0;
    list-style: none;
}

.w-embed:before,
.w-embed:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-embed:after {
    clear: both;
}

.w-video {
    width: 100%;
    padding: 0;
    position: relative;
}

.w-video iframe,
.w-video object,
.w-video embed {
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0;
}

button,
[type="button"],
[type="reset"] {
    cursor: pointer;
    -webkit-appearance: button;
    border: 0;
}

.w-form {
    margin: 0 0 15px;
}

.w-form-done {
    text-align: center;
    background-color: #ddd;
    padding: 20px;
    display: none;
}

.w-form-fail {
    background-color: #ffdede;
    margin-top: 10px;
    padding: 10px;
    display: none;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
    display: block;
}

.w-input,
.w-select {
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    display: block;
}

.w-input::placeholder,
.w-select::placeholder {
    color: #999;
}

.w-input:focus,
.w-select:focus {
    border-color: #3898ec;
    outline: 0;
}

.w-input[disabled],
.w-select[disabled],
.w-input[readonly],
.w-select[readonly],
fieldset[disabled] .w-input,
fieldset[disabled] .w-select {
    cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled),
.w-select[disabled]:not(.w-input-disabled),
.w-input[readonly],
.w-select[readonly],
fieldset[disabled]:not(.w-input-disabled) .w-input,
fieldset[disabled]:not(.w-input-disabled) .w-select {
    background-color: #eee;
}

textarea.w-input,
textarea.w-select {
    height: auto;
}

.w-select {
    background-color: #f3f3f3;
}

.w-select[multiple] {
    height: auto;
}

.w-form-label {
    cursor: pointer;
    margin-bottom: 0;
    font-weight: normal;
    display: inline-block;
}

.w-radio {
    margin-bottom: 5px;
    padding-left: 20px;
    display: block;
}

.w-radio:before,
.w-radio:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-radio:after {
    clear: both;
}

.w-radio-input {
    float: left;
    margin: 3px 0 0 -20px;
    line-height: normal;
}

.w-file-upload {
    margin-bottom: 10px;
    display: block;
}

.w-file-upload-input {
    opacity: 0;
    z-index: -100;
    width: .1px;
    height: .1px;
    position: absolute;
    overflow: hidden;
}

.w-file-upload-default,
.w-file-upload-uploading,
.w-file-upload-success {
    color: #333;
    display: inline-block;
}

.w-file-upload-error {
    margin-top: 10px;
    display: block;
}

.w-file-upload-default.w-hidden,
.w-file-upload-uploading.w-hidden,
.w-file-upload-error.w-hidden,
.w-file-upload-success.w-hidden {
    display: none;
}

.w-file-upload-uploading-btn {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: normal;
    display: flex;
}

.w-file-upload-file {
    background-color: #fafafa;
    border: 1px solid #ccc;
    flex-grow: 1;
    justify-content: space-between;
    margin: 0;
    padding: 8px 9px 8px 11px;
    display: flex;
}

.w-file-upload-file-name {
    font-size: 14px;
    font-weight: normal;
    display: block;
}

.w-file-remove-link {
    cursor: pointer;
    width: auto;
    height: auto;
    margin-top: 3px;
    margin-left: 10px;
    padding: 3px;
    display: block;
}

.w-icon-file-upload-remove {
    margin: auto;
    font-size: 10px;
}

.w-file-upload-error-msg {
    color: #ea384c;
    padding: 2px 0;
    display: inline-block;
}

.w-file-upload-info {
    padding: 0 12px;
    line-height: 38px;
    display: inline-block;
}

.w-file-upload-label {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: normal;
    display: inline-block;
}

.w-icon-file-upload-icon,
.w-icon-file-upload-uploading {
    width: 20px;
    margin-right: 8px;
    display: inline-block;
}

.w-icon-file-upload-uploading {
    height: 20px;
}

.w-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
}

.w-container:before,
.w-container:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-container:after {
    clear: both;
}

.w-container .w-row {
    margin-left: -10px;
    margin-right: -10px;
}

.w-row:before,
.w-row:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-row:after {
    clear: both;
}

.w-row .w-row {
    margin-left: 0;
    margin-right: 0;
}

.w-col {
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
}

.w-col .w-col {
    padding-left: 0;
    padding-right: 0;
}

.w-col-1 {
    width: 8.33333%;
}

.w-col-2 {
    width: 16.6667%;
}

.w-col-3 {
    width: 25%;
}

.w-col-4 {
    width: 33.3333%;
}

.w-col-5 {
    width: 41.6667%;
}

.w-col-6 {
    width: 50%;
}

.w-col-7 {
    width: 58.3333%;
}

.w-col-8 {
    width: 66.6667%;
}

.w-col-9 {
    width: 75%;
}

.w-col-10 {
    width: 83.3333%;
}

.w-col-11 {
    width: 91.6667%;
}

.w-col-12 {
    width: 100%;
}

.w-hidden-main {
    display: none !important;
}

@media screen and (max-width: 991px) {
    .w-container {
        max-width: 728px;
    }
    .w-hidden-main {
        display: inherit !important;
    }
    .w-hidden-medium {
        display: none !important;
    }
    .w-col-medium-1 {
        width: 8.33333%;
    }
    .w-col-medium-2 {
        width: 16.6667%;
    }
    .w-col-medium-3 {
        width: 25%;
    }
    .w-col-medium-4 {
        width: 33.3333%;
    }
    .w-col-medium-5 {
        width: 41.6667%;
    }
    .w-col-medium-6 {
        width: 50%;
    }
    .w-col-medium-7 {
        width: 58.3333%;
    }
    .w-col-medium-8 {
        width: 66.6667%;
    }
    .w-col-medium-9 {
        width: 75%;
    }
    .w-col-medium-10 {
        width: 83.3333%;
    }
    .w-col-medium-11 {
        width: 91.6667%;
    }
    .w-col-medium-12 {
        width: 100%;
    }
    .w-col-stack {
        width: 100%;
        left: auto;
        right: auto;
    }
}

@media screen and (max-width: 767px) {
    .w-hidden-main,
    .w-hidden-medium {
        display: inherit !important;
    }
    .w-hidden-small {
        display: none !important;
    }
    .w-row,
    .w-container .w-row {
        margin-left: 0;
        margin-right: 0;
    }
    .w-col {
        width: 100%;
        left: auto;
        right: auto;
    }
    .w-col-small-1 {
        width: 8.33333%;
    }
    .w-col-small-2 {
        width: 16.6667%;
    }
    .w-col-small-3 {
        width: 25%;
    }
    .w-col-small-4 {
        width: 33.3333%;
    }
    .w-col-small-5 {
        width: 41.6667%;
    }
    .w-col-small-6 {
        width: 50%;
    }
    .w-col-small-7 {
        width: 58.3333%;
    }
    .w-col-small-8 {
        width: 66.6667%;
    }
    .w-col-small-9 {
        width: 75%;
    }
    .w-col-small-10 {
        width: 83.3333%;
    }
    .w-col-small-11 {
        width: 91.6667%;
    }
    .w-col-small-12 {
        width: 100%;
    }
}

@media screen and (max-width: 479px) {
    .w-container {
        max-width: none;
    }
    .w-hidden-main,
    .w-hidden-medium,
    .w-hidden-small {
        display: inherit !important;
    }
    .w-hidden-tiny {
        display: none !important;
    }
    .w-col {
        width: 100%;
    }
    .w-col-tiny-1 {
        width: 8.33333%;
    }
    .w-col-tiny-2 {
        width: 16.6667%;
    }
    .w-col-tiny-3 {
        width: 25%;
    }
    .w-col-tiny-4 {
        width: 33.3333%;
    }
    .w-col-tiny-5 {
        width: 41.6667%;
    }
    .w-col-tiny-6 {
        width: 50%;
    }
    .w-col-tiny-7 {
        width: 58.3333%;
    }
    .w-col-tiny-8 {
        width: 66.6667%;
    }
    .w-col-tiny-9 {
        width: 75%;
    }
    .w-col-tiny-10 {
        width: 83.3333%;
    }
    .w-col-tiny-11 {
        width: 91.6667%;
    }
    .w-col-tiny-12 {
        width: 100%;
    }
}

.w-widget {
    position: relative;
}

.w-widget-map {
    width: 100%;
    height: 400px;
}

.w-widget-map label {
    width: auto;
    display: inline;
}

.w-widget-map img {
    max-width: inherit;
}

.w-widget-map .gm-style-iw {
    text-align: center;
}

.w-widget-map .gm-style-iw>button {
    display: none !important;
}

.w-widget-twitter {
    overflow: hidden;
}

.w-widget-twitter-count-shim {
    vertical-align: top;
    text-align: center;
    background: #fff;
    border: 1px solid #758696;
    border-radius: 3px;
    width: 28px;
    height: 20px;
    display: inline-block;
    position: relative;
}

.w-widget-twitter-count-shim * {
    pointer-events: none;
    -webkit-user-select: none;
    user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
    text-align: center;
    color: #999;
    font-family: serif;
    font-size: 15px;
    line-height: 12px;
    position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
    display: block;
    position: relative;
}

.w-widget-twitter-count-shim.w--large {
    width: 36px;
    height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
    margin-left: 5px;
    margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
    margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before,
.w-widget-twitter-count-shim:not(.w--vertical):after {
    content: " ";
    pointer-events: none;
    border: solid #0000;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
    border-width: 4px;
    border-color: #75869600 #5d6c7b #75869600 #75869600;
    margin-top: -4px;
    margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
    border-width: 4px;
    border-color: #fff0 #fff #fff0 #fff0;
    margin-top: -4px;
    margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
    width: 61px;
    height: 33px;
    margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before,
.w-widget-twitter-count-shim.w--vertical:after {
    content: " ";
    pointer-events: none;
    border: solid #0000;
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
    border-width: 5px;
    border-color: #5d6c7b #75869600 #75869600;
    margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
    border-width: 4px;
    border-color: #fff #fff0 #fff0;
    margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
    width: 76px;
}

.w-background-video {
    color: #fff;
    height: 500px;
    position: relative;
    overflow: hidden;
}

.w-background-video>video {
    object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    inset: -100%;
}

.w-background-video>video::-webkit-media-controls-start-playback-button {
    -webkit-appearance: none;
    display: none !important;
}

.w-background-video--control {
    background-color: #0000;
    padding: 0;
    position: absolute;
    bottom: 1em;
    right: 1em;
}

.w-background-video--control>[hidden] {
    display: none !important;
}

.w-slider {
    text-align: center;
    clear: both;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    background: #ddd;
    height: 300px;
    position: relative;
}

.w-slider-mask {
    z-index: 1;
    white-space: nowrap;
    height: 100%;
    display: block;
    position: relative;
    left: 0;
    right: 0;
    overflow: hidden;
}

.w-slide {
    vertical-align: top;
    white-space: normal;
    text-align: left;
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
}

.w-slider-nav {
    z-index: 2;
    text-align: center;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    height: 40px;
    margin: auto;
    padding-top: 10px;
    position: absolute;
    inset: auto 0 0;
}

.w-slider-nav.w-round>div {
    border-radius: 100%;
}

.w-slider-nav.w-num>div {
    font-size: inherit;
    line-height: inherit;
    width: auto;
    height: auto;
    padding: .2em .5em;
}

.w-slider-nav.w-shadow>div {
    box-shadow: 0 0 3px #3336;
}

.w-slider-nav-invert {
    color: #fff;
}

.w-slider-nav-invert>div {
    background-color: #2226;
}

.w-slider-nav-invert>div.w-active {
    background-color: #222;
}

.w-slider-dot {
    cursor: pointer;
    background-color: #fff6;
    width: 1em;
    height: 1em;
    margin: 0 3px .5em;
    transition: background-color .1s, color .1s;
    display: inline-block;
    position: relative;
}

.w-slider-dot.w-active {
    background-color: #fff;
}

.w-slider-dot:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
    box-shadow: none;
}

.w-slider-arrow-left,
.w-slider-arrow-right {
    cursor: pointer;
    color: #fff;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    -webkit-user-select: none;
    user-select: none;
    width: 80px;
    margin: auto;
    font-size: 40px;
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"],
.w-slider-arrow-right [class^="w-icon-"],
.w-slider-arrow-left [class*=" w-icon-"],
.w-slider-arrow-right [class*=" w-icon-"] {
    position: absolute;
}

.w-slider-arrow-left:focus,
.w-slider-arrow-right:focus {
    outline: 0;
}

.w-slider-arrow-left {
    z-index: 3;
    right: auto;
}

.w-slider-arrow-right {
    z-index: 4;
    left: auto;
}

.w-icon-slider-left,
.w-icon-slider-right {
    width: 1em;
    height: 1em;
    margin: auto;
    inset: 0;
}

.w-slider-aria-label {
    clip: rect(0 0 0 0);
    border: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
}

.w-slider-force-show {
    display: block !important;
}

.w-dropdown {
    text-align: left;
    z-index: 900;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    position: relative;
}

.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    position: relative;
}

.w-dropdown-toggle {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    padding-right: 40px;
    display: inline-block;
}

.w-dropdown-toggle:focus {
    outline: 0;
}

.w-icon-dropdown-toggle {
    width: 1em;
    height: 1em;
    margin: auto 20px auto auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
}

.w-dropdown-list {
    background: #ddd;
    min-width: 100%;
    display: none;
    position: absolute;
}

.w-dropdown-list.w--open {
    display: block;
}

.w-dropdown-link {
    color: #222;
    padding: 10px 20px;
    display: block;
}

.w-dropdown-link.w--current {
    color: #0082f3;
}

.w-dropdown-link:focus {
    outline: 0;
}

@media screen and (max-width: 767px) {
    .w-nav-brand {
        padding-left: 10px;
    }
}

.w-lightbox-backdrop {
    cursor: auto;
    letter-spacing: normal;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    visibility: visible;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    color: #fff;
    text-align: center;
    z-index: 2000;
    opacity: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: #000000e6;
    outline: 0;
    font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.2;
    list-style: disc;
    position: fixed;
    inset: 0;
    -webkit-transform: translate(0);
}

.w-lightbox-backdrop,
.w-lightbox-container {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow: auto;
}

.w-lightbox-content {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.w-lightbox-view {
    opacity: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
}

.w-lightbox-view:before {
    content: "";
    height: 100vh;
}

.w-lightbox-group,
.w-lightbox-group .w-lightbox-view,
.w-lightbox-group .w-lightbox-view:before {
    height: 86vh;
}

.w-lightbox-frame,
.w-lightbox-view:before {
    vertical-align: middle;
    display: inline-block;
}

.w-lightbox-figure {
    margin: 0;
    position: relative;
}

.w-lightbox-group .w-lightbox-figure {
    cursor: pointer;
}

.w-lightbox-img {
    width: auto;
    max-width: none;
    height: auto;
}

.w-lightbox-image {
    float: none;
    max-width: 100vw;
    max-height: 100vh;
    display: block;
}

.w-lightbox-group .w-lightbox-image {
    max-height: 86vh;
}

.w-lightbox-caption {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #0006;
    padding: .5em 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.w-lightbox-embed {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
}

.w-lightbox-control {
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px;
    width: 4em;
    transition: all .3s;
    position: absolute;
    top: 0;
}

.w-lightbox-left {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
    display: none;
    bottom: 0;
    left: 0;
}

.w-lightbox-right {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
    display: none;
    bottom: 0;
    right: 0;
}

.w-lightbox-close {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
    background-size: 18px;
    height: 2.6em;
    right: 0;
}

.w-lightbox-strip {
    white-space: nowrap;
    padding: 0 1vh;
    line-height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto hidden;
}

.w-lightbox-item {
    box-sizing: content-box;
    cursor: pointer;
    width: 10vh;
    padding: 2vh 1vh;
    display: inline-block;
    -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
    opacity: .3;
}

.w-lightbox-thumbnail {
    background: #222;
    height: 10vh;
    position: relative;
    overflow: hidden;
}

.w-lightbox-thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
    height: 100%;
    left: 50%;
    transform: translate(-50%);
}

.w-lightbox-spinner {
    box-sizing: border-box;
    border: 5px solid #0006;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
    animation: .8s linear infinite spin;
    position: absolute;
    top: 50%;
    left: 50%;
}

.w-lightbox-spinner:after {
    content: "";
    border: 3px solid #0000;
    border-bottom-color: #fff;
    border-radius: 50%;
    position: absolute;
    inset: -4px;
}

.w-lightbox-hide {
    display: none;
}

.w-lightbox-noscroll {
    overflow: hidden;
}

@media (min-width: 768px) {
    .w-lightbox-content {
        height: 96vh;
        margin-top: 2vh;
    }
    .w-lightbox-view,
    .w-lightbox-view:before {
        height: 96vh;
    }
    .w-lightbox-group,
    .w-lightbox-group .w-lightbox-view,
    .w-lightbox-group .w-lightbox-view:before {
        height: 84vh;
    }
    .w-lightbox-image {
        max-width: 96vw;
        max-height: 96vh;
    }
    .w-lightbox-group .w-lightbox-image {
        max-width: 82.3vw;
        max-height: 84vh;
    }
    .w-lightbox-left,
    .w-lightbox-right {
        opacity: .5;
        display: block;
    }
    .w-lightbox-close {
        opacity: .8;
    }
    .w-lightbox-control:hover {
        opacity: 1;
    }
}

.w-lightbox-inactive,
.w-lightbox-inactive:hover {
    opacity: 0;
}

.w-richtext:before,
.w-richtext:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-richtext:after {
    clear: both;
}

.w-richtext[contenteditable="true"]:before,
.w-richtext[contenteditable="true"]:after {
    white-space: initial;
}

.w-richtext ol,
.w-richtext ul {
    overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,
.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after,
.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,
.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
    outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video>div:after,
.w-richtext figure[data-rt-type="video"]>div:after {
    content: "";
    display: none;
    position: absolute;
    inset: 0;
}

.w-richtext figure {
    max-width: 60%;
    position: relative;
}

.w-richtext figure>div:before {
    cursor: default !important;
}

.w-richtext figure img {
    width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
    opacity: .6;
}

.w-richtext figure div {
    color: #0000;
    font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image,
.w-richtext figure[data-rt-type="image"] {
    display: table;
}

.w-richtext figure.w-richtext-figure-type-image>div,
.w-richtext figure[data-rt-type="image"]>div {
    display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image>figcaption,
.w-richtext figure[data-rt-type="image"]>figcaption {
    caption-side: bottom;
    display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video,
.w-richtext figure[data-rt-type="video"] {
    width: 60%;
    height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe,
.w-richtext figure[data-rt-type="video"] iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.w-richtext figure.w-richtext-figure-type-video>div,
.w-richtext figure[data-rt-type="video"]>div {
    width: 100%;
}

.w-richtext figure.w-richtext-align-center {
    clear: both;
    margin-left: auto;
    margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,
.w-richtext figure.w-richtext-align-center[data-rt-type="image"]>div {
    max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
    clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
    text-align: center;
    clear: both;
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.w-richtext figure.w-richtext-align-fullwidth>div {
    padding-bottom: inherit;
    display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth>figcaption {
    display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
    float: left;
    clear: none;
    margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
    float: right;
    clear: none;
    margin-left: 15px;
}

.w-nav {
    z-index: 1000;
    background: #ddd;
    position: relative;
}

.w-nav:before,
.w-nav:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-nav:after {
    clear: both;
}

.w-nav-brand {
    float: left;
    color: #333;
    text-decoration: none;
    position: relative;
}

.w-nav-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    display: inline-block;
    position: relative;
}

.w-nav-link.w--current {
    color: #0082f3;
}

.w-nav-menu {
    float: right;
    position: relative;
}

[data-nav-menu-open] {
    text-align: center;
    background: #c8c8c8;
    min-width: 200px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: visible;
    display: block !important;
}

.w--nav-link-open {
    display: block;
    position: relative;
}

.w-nav-overlay {
    width: 100%;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
    top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
    width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay,
.w-nav[data-animation="over-left"] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
    width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay,
.w-nav[data-animation="over-right"] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    left: auto;
}

.w-nav-button {
    float: right;
    cursor: pointer;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    -webkit-user-select: none;
    user-select: none;
    padding: 18px;
    font-size: 24px;
    display: none;
    position: relative;
}

.w-nav-button:focus {
    outline: 0;
}

.w-nav-button.w--open {
    color: #fff;
    background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
    display: none;
}

.w-nav[data-collapse="all"] .w-nav-button,
.w--nav-dropdown-open,
.w--nav-dropdown-toggle-open {
    display: block;
}

.w--nav-dropdown-list-open {
    position: static;
}

@media screen and (max-width: 991px) {
    .w-nav[data-collapse="medium"] .w-nav-menu {
        display: none;
    }
    .w-nav[data-collapse="medium"] .w-nav-button {
        display: block;
    }
}

@media screen and (max-width: 767px) {
    .w-nav[data-collapse="small"] .w-nav-menu {
        display: none;
    }
    .w-nav[data-collapse="small"] .w-nav-button {
        display: block;
    }
    .w-nav-brand {
        padding-left: 10px;
    }
}

@media screen and (max-width: 479px) {
    .w-nav[data-collapse="tiny"] .w-nav-menu {
        display: none;
    }
    .w-nav[data-collapse="tiny"] .w-nav-button {
        display: block;
    }
}

.w-tabs {
    position: relative;
}

.w-tabs:before,
.w-tabs:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
}

.w-tabs:after {
    clear: both;
}

.w-tab-menu {
    position: relative;
}

.w-tab-link {
    vertical-align: top;
    text-align: left;
    cursor: pointer;
    color: #222;
    background-color: #ddd;
    padding: 9px 30px;
    text-decoration: none;
    display: inline-block;
    position: relative;
}

.w-tab-link.w--current {
    background-color: #c8c8c8;
}

.w-tab-link:focus {
    outline: 0;
}

.w-tab-content {
    display: block;
    position: relative;
    overflow: hidden;
}

.w-tab-pane {
    display: none;
    position: relative;
}

.w--tab-active {
    display: block;
}

@media screen and (max-width: 479px) {
    .w-tab-link {
        display: block;
    }
}

.w-ix-emptyfix:after {
    content: "";
}

@keyframes spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.w-dyn-empty {
    background-color: #ddd;
    padding: 10px;
}

.w-dyn-hide,
.w-dyn-bind-empty,
.w-condition-invisible {
    display: none !important;
}

.wf-layout-layout {
    display: grid;
}

.w-code-component>* {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

:root {
    --black: #050505;
    --white: whitesmoke;
    --light-grey: #eee;
    --primary: whitesmoke;
    --secondary: #1c1c1c;
    --transparent: transparent;
    --border-radius: 32px;
    --dark-gray: #777;
    --primary-50: #f5f5f580;
    --services-gap: 8.89vw;
}

.w-commerce-commercecartwrapper {
    display: inline-block;
    position: relative;
}

.w-commerce-commercecartopenlink {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 0;
    align-items: center;
    padding: 9px 15px;
    text-decoration: none;
    display: flex;
}

.w-commerce-commercecartopenlinkicon {
    margin-right: 8px;
}

.w-commerce-commercecartopenlinkcount {
    color: #3898ec;
    text-align: center;
    background-color: #fff;
    border-radius: 9px;
    min-width: 18px;
    height: 18px;
    margin-left: 8px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 11px;
    font-weight: 700;
    line-height: 18px;
    display: inline-block;
}

.w-commerce-commercecartcontainerwrapper {
    z-index: 1001;
    background-color: #000c;
    position: fixed;
    inset: 0;
}

.w-commerce-commercecartcontainerwrapper--cartType-modal {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
}

.w-commerce-commercecartcontainerwrapper--cartType-leftSidebar {
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    display: flex;
}

.w-commerce-commercecartcontainerwrapper--cartType-rightSidebar {
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    display: flex;
}

.w-commerce-commercecartcontainerwrapper--cartType-leftDropdown {
    background-color: #0000;
    position: absolute;
    inset: 100% auto auto 0;
}

.w-commerce-commercecartcontainerwrapper--cartType-rightDropdown {
    background-color: #0000;
    position: absolute;
    inset: 100% 0 auto auto;
}

.w-commerce-commercecartcontainer {
    background-color: #fff;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    max-width: 480px;
    display: flex;
    overflow: auto;
    box-shadow: 0 5px 25px #00000040;
}

.w-commerce-commercecartheader {
    border-bottom: 1px solid #e6e6e6;
    flex: none;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    display: flex;
    position: relative;
}

.w-commerce-commercecartheading {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
}

.w-commerce-commercecartcloselink {
    width: 16px;
    height: 16px;
}

.w-commerce-commercecartformwrapper {
    flex-direction: column;
    flex: 1;
    display: flex;
}

.w-commerce-commercecartform {
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    display: flex;
}

.w-commerce-commercecartlist {
    -webkit-overflow-scrolling: touch;
    flex: 1;
    padding: 12px 24px;
    overflow: auto;
}

.w-commerce-commercecartitem {
    align-items: flex-start;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
}

.w-commerce-commercecartitemimage {
    width: 60px;
    height: 0%;
}

.w-commerce-commercecartiteminfo {
    flex-direction: column;
    flex: 1;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
}

.w-commerce-commercecartproductname {
    font-weight: 700;
}

.w-commerce-commercecartoptionlist {
    margin-bottom: 0;
    padding-left: 0;
    text-decoration: none;
    list-style-type: none;
}

.w-commerce-commercecartquantity {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 60px;
    height: 38px;
    margin-bottom: 10px;
    padding: 8px 6px 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecartquantity::placeholder {
    color: #999;
}

.w-commerce-commercecartquantity:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecartfooter {
    border-top: 1px solid #e6e6e6;
    flex-direction: column;
    flex: none;
    padding: 16px 24px 24px;
    display: flex;
}

.w-commerce-commercecartlineitem {
    flex: none;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 16px;
    display: flex;
}

.w-commerce-commercecartordervalue {
    font-weight: 700;
}

.w-commerce-commercecartapplepaybutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: #000;
    border-width: 0;
    border-radius: 2px;
    align-items: center;
    height: 38px;
    min-height: 30px;
    margin-bottom: 8px;
    padding: 0;
    text-decoration: none;
    display: flex;
}

.w-commerce-commercecartapplepayicon {
    width: 100%;
    height: 50%;
    min-height: 20px;
}

.w-commerce-commercecartquickcheckoutbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: #000;
    border-width: 0;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    height: 38px;
    margin-bottom: 8px;
    padding: 0 15px;
    text-decoration: none;
    display: flex;
}

.w-commerce-commercequickcheckoutgoogleicon,
.w-commerce-commercequickcheckoutmicrosofticon {
    margin-right: 8px;
    display: block;
}

.w-commerce-commercecartcheckoutbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    text-align: center;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 2px;
    align-items: center;
    padding: 9px 15px;
    text-decoration: none;
    display: block;
}

.w-commerce-commercecartemptystate {
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
}

.w-commerce-commercecarterrorstate {
    background-color: #ffdede;
    flex: none;
    margin: 0 24px 24px;
    padding: 10px;
}

.w-layout-hflex {
    flex-direction: row;
    align-items: flex-start;
    display: flex;
}

.w-layout-vflex {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
}

.w-commerce-commercecheckoutformcontainer {
    background-color: #f5f5f5;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.w-commerce-commercelayoutcontainer {
    justify-content: center;
    align-items: flex-start;
    display: flex;
}

.w-commerce-commercelayoutmain {
    flex: 0 800px;
    margin-right: 20px;
}

.w-commerce-commercecheckoutcustomerinfowrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutblockheader {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: baseline;
    padding: 4px 20px;
    display: flex;
}

.w-commerce-commercecheckoutblockcontent {
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    padding: 20px;
}

.w-commerce-commercecheckoutlabel {
    margin-bottom: 8px;
}

.w-commerce-commercecheckoutemailinput {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 0;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutemailinput::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutemailinput:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingaddresswrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutshippingfullname {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingfullname::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingfullname:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingstreetaddress {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingstreetaddress::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingstreetaddress:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutrow {
    margin-left: -8px;
    margin-right: -8px;
    display: flex;
}

.w-commerce-commercecheckoutcolumn {
    flex: 1;
    padding-left: 8px;
    padding-right: 8px;
}

.w-commerce-commercecheckoutshippingcity {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingcity::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingcity:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingstateprovince {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingstateprovince::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingstateprovince:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingzippostalcode {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingzippostalcode::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingzippostalcode:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingcountryselector {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 0;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutshippingcountryselector::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutshippingcountryselector:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutshippingmethodswrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutshippingmethodslist {
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
}

.w-commerce-commercecheckoutshippingmethoditem {
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 0;
    padding: 16px;
    font-weight: 400;
    display: flex;
}

.w-commerce-commercecheckoutshippingmethoddescriptionblock {
    flex-direction: column;
    flex-grow: 1;
    margin-left: 12px;
    margin-right: 12px;
    display: flex;
}

.w-commerce-commerceboldtextblock {
    font-weight: 700;
}

.w-commerce-commercecheckoutshippingmethodsemptystate {
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    padding: 64px 16px;
}

.w-commerce-commercecheckoutpaymentinfowrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutcardnumber {
    -webkit-appearance: none;
    appearance: none;
    cursor: text;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutcardnumber::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutcardnumber:focus,
.w-commerce-commercecheckoutcardnumber.-wfp-focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutcardexpirationdate {
    -webkit-appearance: none;
    appearance: none;
    cursor: text;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutcardexpirationdate::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutcardexpirationdate:focus,
.w-commerce-commercecheckoutcardexpirationdate.-wfp-focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutcardsecuritycode {
    -webkit-appearance: none;
    appearance: none;
    cursor: text;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutcardsecuritycode::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutcardsecuritycode:focus,
.w-commerce-commercecheckoutcardsecuritycode.-wfp-focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingaddresstogglewrapper {
    flex-direction: row;
    display: flex;
}

.w-commerce-commercecheckoutbillingaddresstogglecheckbox {
    margin-top: 4px;
}

.w-commerce-commercecheckoutbillingaddresstogglelabel {
    margin-left: 8px;
    font-weight: 400;
}

.w-commerce-commercecheckoutbillingaddresswrapper {
    margin-top: 16px;
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutbillingfullname {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingfullname::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingfullname:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingstreetaddress {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingstreetaddress::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingstreetaddress:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingcity {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingcity::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingcity:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingstateprovince {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingstateprovince::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingstateprovince:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingzippostalcode {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 16px;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingzippostalcode::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingzippostalcode:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutbillingcountryselector {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    height: 38px;
    margin-bottom: 0;
    padding: 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commercecheckoutbillingcountryselector::placeholder {
    color: #999;
}

.w-commerce-commercecheckoutbillingcountryselector:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commercecheckoutorderitemswrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummaryblockheader {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: baseline;
    padding: 4px 20px;
    display: flex;
}

.w-commerce-commercecheckoutorderitemslist {
    margin-bottom: -20px;
}

.w-commerce-commercecheckoutorderitem {
    margin-bottom: 20px;
    display: flex;
}

.w-commerce-commercecheckoutorderitemdescriptionwrapper {
    flex-grow: 1;
    margin-left: 16px;
    margin-right: 16px;
}

.w-commerce-commercecheckoutorderitemquantitywrapper {
    white-space: pre-wrap;
    display: flex;
}

.w-commerce-commercecheckoutorderitemoptionlist {
    margin-bottom: 0;
    padding-left: 0;
    text-decoration: none;
    list-style-type: none;
}

.w-commerce-commercelayoutsidebar {
    flex: 0 0 320px;
    position: sticky;
    top: 20px;
}

.w-commerce-commercecheckoutordersummarywrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummarylineitem,
.w-commerce-commercecheckoutordersummaryextraitemslistitem {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
    display: flex;
}

.w-commerce-commercecheckoutsummarytotal {
    font-weight: 700;
}

.w-commerce-commercecheckoutplaceorderbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    text-align: center;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 3px;
    align-items: center;
    margin-bottom: 20px;
    padding: 9px 15px;
    text-decoration: none;
    display: block;
}

.w-commerce-commercecheckouterrorstate {
    background-color: #ffdede;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 10px 16px;
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.w-commerce-commerceaddtocartform {
    margin: 0 0 15px;
}

.w-commerce-commerceaddtocartoptionpillgroup {
    margin-bottom: 10px;
    display: flex;
}

.w-commerce-commerceaddtocartoptionpill {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #000;
    margin-right: 10px;
    padding: 8px 15px;
}

.w-commerce-commerceaddtocartoptionpill.w--ecommerce-pill-selected {
    color: #fff;
    background-color: #000;
}

.w-commerce-commerceaddtocartoptionpill.w--ecommerce-pill-disabled {
    color: #666;
    cursor: not-allowed;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    outline-style: none;
}

.w-commerce-commerceaddtocartquantityinput {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 60px;
    height: 38px;
    margin-bottom: 10px;
    padding: 8px 6px 8px 12px;
    line-height: 20px;
    display: block;
}

.w-commerce-commerceaddtocartquantityinput::placeholder {
    color: #999;
}

.w-commerce-commerceaddtocartquantityinput:focus {
    border-color: #3898ec;
    outline-style: none;
}

.w-commerce-commerceaddtocartbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 0;
    align-items: center;
    padding: 9px 15px;
    text-decoration: none;
    display: flex;
}

.w-commerce-commerceaddtocartbutton.w--ecommerce-add-to-cart-disabled {
    color: #666;
    cursor: not-allowed;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    outline-style: none;
}

.w-commerce-commercebuynowbutton {
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: #3898ec;
    border-width: 0;
    border-radius: 0;
    align-items: center;
    margin-top: 10px;
    padding: 9px 15px;
    text-decoration: none;
    display: inline-block;
}

.w-commerce-commercebuynowbutton.w--ecommerce-buy-now-disabled {
    color: #666;
    cursor: not-allowed;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    outline-style: none;
}

.w-commerce-commerceaddtocartoutofstock {
    background-color: #ddd;
    margin-top: 10px;
    padding: 10px;
}

.w-commerce-commerceaddtocarterror {
    background-color: #ffdede;
    margin-top: 10px;
    padding: 10px;
}

.w-commerce-commerceorderconfirmationcontainer {
    background-color: #f5f5f5;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.w-commerce-commercecheckoutcustomerinfosummarywrapper {
    margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummaryitem,
.w-commerce-commercecheckoutsummarylabel {
    margin-bottom: 8px;
}

.w-commerce-commercecheckoutsummaryflexboxdiv {
    flex-direction: row;
    justify-content: flex-start;
    display: flex;
}

.w-commerce-commercecheckoutsummarytextspacingondiv {
    margin-right: .33em;
}

.w-commerce-commercecheckoutshippingsummarywrapper,
.w-commerce-commercecheckoutpaymentsummarywrapper {
    margin-bottom: 20px;
}

.w-commerce-commercepaypalcheckoutformcontainer {
    background-color: #f5f5f5;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.w-commerce-commercepaypalcheckouterrorstate {
    background-color: #ffdede;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 10px 16px;
}

.w-layout-blockcontainer {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

@media screen and (max-width: 991px) {
    .w-layout-blockcontainer {
        max-width: 728px;
    }
}

@media screen and (max-width: 767px) {
    .w-commerce-commercelayoutcontainer {
        flex-direction: column;
        align-items: stretch;
    }
    .w-commerce-commercelayoutmain {
        flex-basis: auto;
        margin-right: 0;
    }
    .w-commerce-commercelayoutsidebar {
        flex-basis: auto;
    }
    .w-layout-blockcontainer {
        max-width: none;
    }
}

@media screen and (max-width: 479px) {
    .w-commerce-commercecartcontainerwrapper--cartType-modal {
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
    }
    .w-commerce-commercecartcontainerwrapper--cartType-leftDropdown,
    .w-commerce-commercecartcontainerwrapper--cartType-rightDropdown {
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        display: flex;
        position: fixed;
        inset: 0;
    }
    .w-commerce-commercecartquantity,
    .w-commerce-commercecheckoutemailinput,
    .w-commerce-commercecheckoutshippingfullname,
    .w-commerce-commercecheckoutshippingstreetaddress,
    .w-commerce-commercecheckoutshippingstreetaddressoptional {
        font-size: 16px;
    }
    .w-commerce-commercecheckoutrow {
        flex-direction: column;
    }
    .w-commerce-commercecheckoutshippingcity,
    .w-commerce-commercecheckoutshippingstateprovince,
    .w-commerce-commercecheckoutshippingzippostalcode,
    .w-commerce-commercecheckoutshippingcountryselector,
    .w-commerce-commercecheckoutcardnumber,
    .w-commerce-commercecheckoutcardexpirationdate,
    .w-commerce-commercecheckoutcardsecuritycode,
    .w-commerce-commercecheckoutbillingfullname,
    .w-commerce-commercecheckoutbillingstreetaddress,
    .w-commerce-commercecheckoutbillingstreetaddressoptional,
    .w-commerce-commercecheckoutbillingcity,
    .w-commerce-commercecheckoutbillingstateprovince,
    .w-commerce-commercecheckoutbillingzippostalcode,
    .w-commerce-commercecheckoutbillingcountryselector,
    .w-commerce-commerceaddtocartquantityinput {
        font-size: 16px;
    }
}

body {
    background-color: var(--black);
    color: var(--white);
    font-family: Archivo, sans-serif;
    font-size: 1vw;
    line-height: 1.4vw;
}

h1 {
    color: var(--white);
    letter-spacing: -.07vw;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Archivo, sans-serif;
    font-size: 5.55vw;
    font-weight: 700;
    line-height: 6.11vw;
}

h2 {
    color: var(--white);
    letter-spacing: -.07vw;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Archivo, sans-serif;
    font-size: 4.44vw;
    font-weight: 600;
    line-height: 5vw;
}

h3 {
    color: var(--white);
    letter-spacing: -.07vw;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Archivo, sans-serif;
    font-size: 3.33vw;
    font-weight: 200;
    line-height: 3.89vw;
}

h4 {
    color: var(--white);
    letter-spacing: -.07vw;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Archivo, sans-serif;
    font-size: 2.78vw;
    font-weight: 600;
    line-height: 3.33vw;
}

h5 {
    color: var(--white);
    letter-spacing: .14vw;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Archivo, sans-serif;
    font-size: .89vw;
    font-weight: 400;
    line-height: 1.44vw;
}

h6 {
    color: var(--white);
    letter-spacing: .14vw;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Archivo, sans-serif;
    font-size: .78vw;
    font-weight: 400;
    line-height: 1.33vw;
}

p {
    color: var(--light-grey);
    letter-spacing: .07vw;
    margin-bottom: 0;
    font-family: Archivo, sans-serif;
    font-size: 1.11vw;
    font-weight: 100;
    line-height: 1.89vw;
}

a {
    color: var(--light-grey);
    letter-spacing: .07vw;
    font-size: 1.1vw;
    font-weight: 300;
    line-height: 1.44vw;
    text-decoration: none;
    transition: color .3s;
}

a:hover,
a.w--current {
    color: var(--primary);
}

ul {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    color: var(--light-grey);
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2.8vw;
    display: flex;
}

ol {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    color: var(--light-grey);
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2.5rem;
    display: flex;
}

li {
    letter-spacing: .07vw;
    font-family: Archivo, sans-serif;
    font-size: 1.11vw;
    font-weight: 300;
    line-height: 1.89vw;
}

img {
    object-fit: cover;
    max-width: 100%;
    display: inline-block;
}

form {
    width: 100%;
}

label {
    color: var(--light-grey);
    margin-bottom: .3125rem;
    font-family: Archivo, sans-serif;
    font-size: .8125rem;
    font-weight: 300;
    display: block;
}

sup {
    font-size: 1.11vw;
    line-height: 1.11vw;
    top: -1.11vw;
}

blockquote {
    border-left: .3125rem solid var(--primary);
    color: var(--white);
    margin-bottom: 0;
    padding: .56vw 0 .56vw 1.67vw;
    font-size: 1.11vw;
    line-height: 1.89vw;
}

.section {
    width: 100%;
}

.section.relative {
    position: relative;
}

.container {
    width: 100%;
    max-width: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.container.overflow {
    overflow: visible;
}

.container.padding-13-5rem {
    padding-left: 13.5rem;
    padding-right: 13.5rem;
}

.container.justify-bottom {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    display: flex;
}

.container.padding-9rem {
    padding-left: 9rem;
    padding-right: 9rem;
}

.container.padding-4-5rem {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
}

.submit-button {
    background-color: var(--primary);
    color: var(--black);
    text-align: center;
    letter-spacing: .07vw;
    text-transform: uppercase;
    border-radius: 1.7vw;
    padding: .78vw 2.22vw;
    font-family: Archivo, sans-serif;
    font-size: 1.11vw;
    font-weight: 300;
    line-height: 1.89vw;
    transition: color .3s, background-color .3s;
}

.submit-button:hover {
    background-color: var(--secondary);
    color: var(--white);
}

.submit-button.w--current {
    color: var(--black);
}

.faq-text-wrapper {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    display: flex;
}

.max-width-480px {
    max-width: 33.3vw;
}

.max-width-480px.centered {
    text-align: center;
}

.navbar {
    background-color: var(--transparent);
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7.8vw;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10vw;
    padding-right: 10vw;
    display: flex;
    position: absolute;
    inset: 0% 0% auto;
}

.logo-link-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
}

.nav-link {
    color: var(--light-grey);
    text-transform: uppercase;
    padding: 0 1.4vw;
    font-weight: 100;
    transition: color .25s;
}

.nav-link:hover,
.nav-link.w--current {
    color: var(--light-grey);
}

.nav-link.move-down {
    position: absolute;
    top: 100%;
}

.nav-link.move-down.hide-on-tab:hover {
    color: var(--light-grey);
}

.nav-menu {
    margin-right: 2.2vw;
    display: flex;
}

.trigger {
    min-height: 7.78vw;
    position: absolute;
    inset: auto 0% 0%;
}

.faq-wrapper {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    text-align: center;
    flex-direction: column;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.image-parallax-curve {
    min-width: 100%;
}

.faq-dropdown {
    border-radius: var(--border-radius);
    background-color: var(--secondary);
    min-width: 100%;
}

.dropdown-toggle {
    text-align: left;
    cursor: pointer;
    min-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1.1vw;
    padding-left: 2.2vw;
    padding-right: 2.2vw;
}

.faq-flex {
    grid-column-gap: 2.1vw;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
}

.faq-icon {
    min-width: 2.1vw;
    max-width: 2.1vw;
    min-height: 2.1vw;
    max-height: 2.1vw;
}

.invert {
    filter: invert();
}

.dropdown-answer {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.contact-success-message {
    border: .1vw solid var(--white);
    background-color: var(--black);
    color: var(--white);
    text-align: center;
    border-radius: 1.4vw;
    padding: 1.7vw 2.2vw;
}

.contact-success-message::placeholder {
    color: #aaa;
}

.text-field {
    border: .1vw solid var(--secondary);
    border-radius: var(--border-radius);
    background-color: var(--secondary);
    color: var(--white);
    height: 3.3vw;
    padding-left: 1.1vw;
    padding-right: 1.1vw;
    font-size: 1vw;
    line-height: 1.4vw;
}

.text-field:focus {
    border-color: #171f33;
}

.text-field::placeholder {
    color: #868686;
}

.contact-error-message {
    border: .0625rem solid var(--white);
    background-color: var(--black);
    color: #f5f5f5;
    text-align: center;
    border-radius: 1.25rem;
    margin-top: 2.2vw;
    padding: 1.7vw 2.2vw;
}

.contact-error-message::placeholder {
    color: #aaa;
}

.utilities-side-bar {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    border-right: .07vw solid var(--dark-gray);
    text-align: left;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-width: 22.2vw;
    max-width: 22.2vw;
    height: 100vh;
    padding-left: 2.2vw;
    padding-right: 2.2vw;
    display: flex;
    position: sticky;
    top: 2.2vw;
}

.utilities-wrapper-rich-text-and-buttons {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    text-align: left;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.utilities-title {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    display: flex;
}

.utilities-wrapper-paragraph {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    display: flex;
}

.utilities-wrapper-title {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    text-align: left;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    display: flex;
}

.utilities-flex-title {
    grid-column-gap: .8vw;
    grid-row-gap: .8vw;
    color: var(--white);
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
}

.utilities-flex-title.w--current {
    color: var(--primary);
}

.utilities-flex-headings-and-paragraph {
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    display: flex;
}

.utilities-flex {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    display: flex;
    position: relative;
}

.utilities-grid-thirds {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: grid;
}

.utilities-wrapper-colors {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.utilities-title-flex {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    justify-content: center;
    align-items: center;
    display: flex;
}

.utilities-wrapper {
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
}

.color-wrapper {
    border-radius: 6.25rem;
    min-width: 100%;
    max-width: 16rem;
    min-height: 8rem;
    max-height: 8rem;
    position: relative;
    overflow: hidden;
}

.color-wrapper.border {
    border: .0625rem solid var(--light-grey);
}

.fill {
    position: absolute;
    inset: -1rem;
}

.background-primary {
    background-color: var(--primary);
}

.background-secondary {
    background-color: var(--secondary);
}

.background-light-gray {
    background-color: var(--light-grey);
}

.background-black {
    background-color: var(--black);
    padding: 1.4vw;
}

.background-white {
    background-color: var(--white);
}

.utilities-line {
    background-color: var(--primary);
    min-width: 2.2vw;
    min-height: .3vw;
}

.line-spacer {
    width: 100%;
}

.utilities-line-spacer {
    background-color: var(--primary);
    width: 100%;
    min-height: .1vw;
}

.rich-text {
    flex-direction: column;
    display: flex;
}

.logo {
    object-fit: contain;
    object-position: 50% 50%;
    min-height: 2.22vw;
    max-height: 2.22vw;
}

.utilities-gallery-image-wrapper {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.utilities-rtb-wrapper {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.image-wrapper {
    border-radius: 1.5rem;
    min-height: 36vw;
    max-height: 36vw;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
}

.title-text-wrapper {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
}

.text-align-right {
    text-align: right;
}

.text-block {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    text-align: left;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex;
}

.flex-wrapper {
    grid-column-gap: 8.89vw;
    grid-row-gap: 2.2vw;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex;
}

.services-card-wrapper {
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
}

.works-details {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    place-content: center space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 70vw;
    margin-left: auto;
    margin-right: auto;
}

.works-rich-text {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    flex-direction: column;
    display: flex;
}

.services-details {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    place-content: center space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 55.56vw;
    margin-left: auto;
    margin-right: auto;
}

.services-rich-text {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    flex-direction: column;
    display: flex;
}

.flex {
    grid-column-gap: .83vw;
    align-items: flex-start;
    display: flex;
}

.works-grid-thirds {
    grid-column-gap: 2.22vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: grid;
}

.service-project-title {
    font-size: 6.25vw;
    line-height: 6.25vw;
}

.nav-link-wrapper,
.footer-link-wrapper {
    flex-direction: column;
    display: flex;
    position: relative;
    overflow: hidden;
}

.utility-page-wrap {
    background-image: linear-gradient(#000000a6, #000000a6), url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6702b1cadc5b03f2bcd5a2ee_img_OXRv.webp");
    background-position: 0 0, 50%;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    display: flex;
}

.utility-page-content {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    text-align: center;
    flex-direction: column;
    width: 16.25rem;
    display: flex;
}

.utility-page-form {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    flex-direction: column;
    align-items: stretch;
    display: flex;
}

.centered {
    text-align: center;
    align-self: center;
}

.caps {
    text-transform: uppercase;
}

.contact-wrapper {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    display: flex;
}

.faq-main-wrapper {
    grid-column-gap: 4.4vw;
    grid-row-gap: 4.4vw;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.works-big-image {
    aspect-ratio: 16 / 9;
    border-radius: var(--border-radius);
    min-width: 100%;
    max-width: 100%;
}

.utitlities-title-wrapper {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.packages-row {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.price-card {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    border: 1px solid var(--light-grey);
    border-radius: var(--border-radius);
    flex-flow: row;
    justify-content: center;
    align-items: center;
    min-width: 65vw;
    max-width: 65vw;
    padding: 4.44vw 1.11vw 4.44vw 4.44vw;
    display: flex;
}

.price-card-title {
    margin-top: 0;
    font-size: 2.5vw;
    line-height: 2.5vw;
}

.bulleted-description-wrapper {
    width: 100%;
    max-width: 16.66vw;
    margin-bottom: .69vw;
    margin-left: 2.78vw;
    margin-right: 2.78vw;
}

.bulleted-description {
    text-align: center;
    border-bottom: .07vw solid #9999994d;
    min-width: 100%;
    padding-top: .83vw;
    padding-bottom: .83vw;
}

.button {
    border-radius: var(--border-radius);
    background-color: var(--primary);
    color: var(--black);
    text-align: center;
    letter-spacing: .07vw;
    text-transform: uppercase;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding: .7rem 2rem;
    font-family: Archivo, sans-serif;
    font-size: 1.11vw;
    font-weight: 300;
    line-height: 1.89vw;
    transition: color .3s, background-color .3s;
    display: flex;
}

.button:hover {
    background-color: var(--secondary);
    color: var(--white);
}

.button.w--current {
    color: var(--black);
}

.button.w--current:hover {
    background-color: var(--white);
}

.page-grid {
    grid-column-gap: 4.17vw;
    grid-row-gap: 4.17vw;
    grid-template-rows: auto;
    grid-template-columns: .75fr 1fr;
    align-items: start;
}

.fix-scroll-wrapper {
    position: relative;
}

.side-bar-left {
    margin-top: 1.39vw;
    position: sticky;
    top: 4.44vw;
}

.package-button-wrapper {
    margin-top: 1.39vw;
}

.fix-scroll-container-products {
    z-index: 1;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.row-content {
    flex-wrap: wrap;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.brochure-card {
    grid-row-gap: 1.11vw;
    border: 1px solid var(--light-grey);
    border-radius: var(--border-radius);
    flex-direction: column;
    padding: 2.5vw 2.22vw;
    display: flex;
}

.services-page {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.package-text-wrapper {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

.quantity {
    color: var(--black);
}

.select-field {
    background-color: var(--black);
    color: #f5f5f5;
    border: .0625rem solid #171f33;
    border-radius: 1.25rem;
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.select-field:focus {
    border-color: #171f33;
}

.select-field::placeholder {
    color: #aaa;
}

.color-black,
.font-black {
    color: var(--black);
}

.nav-container {
    justify-content: flex-end;
    align-items: center;
    margin-right: 0;
    display: flex;
}

.outline-white {
    color: var(--transparent);
    -webkit-text-stroke-width: .07vw;
    -webkit-text-stroke-color: var(--white);
}

.button-text {
    margin-bottom: 0;
    font-size: 1.11vw;
    line-height: 1.89vw;
}

.title-wrapper {
    grid-column-gap: 1.125rem;
    text-align: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
}

.thumbnails {
    aspect-ratio: 16 / 10;
    border-radius: var(--border-radius);
    min-width: 100%;
}

.checkout {
    border-color: var(--secondary);
    background-color: var(--secondary);
    color: var(--white);
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.billing-address-toggle {
    align-items: flex-start;
}

.title-block {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    text-align: center;
    flex-direction: column;
    align-items: center;
    display: flex;
}

.lightbox-link {
    border-radius: 1.5rem;
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 2.22vw;
    margin-left: auto;
    margin-right: auto;
    display: block;
    overflow: hidden;
}

.package-title {
    text-align: center;
    max-width: 55.56vw;
    font-size: 4.5rem;
    line-height: 4.5rem;
}

.faq-question {
    font-size: 1.7vw;
    font-weight: 500;
    line-height: 2.4vw;
}

.selection {
    border-color: var(--white);
    background-color: var(--black);
    color: var(--white);
}

.selection:hover {
    color: var(--primary);
}

.selection.w--ecommerce-pill-selected {
    background-color: var(--primary);
    color: var(--black);
}

.cart-text {
    display: none;
}

.cart-button {
    background-color: var(--transparent);
    color: var(--white);
    height: 100%;
    padding: .5rem 0 .5rem .5rem;
    position: relative;
}

.cart-quantity {
    background-color: var(--transparent);
    color: var(--white);
    min-width: 1.11vw;
    height: 1.11vw;
    margin-left: 0;
    padding-left: 1.11vw;
    padding-right: 0;
    font-size: .5rem;
    font-weight: 500;
    position: absolute;
    inset: 0% 0% auto auto;
}

.cart-container {
    background-color: var(--black);
    min-width: 22.2vw;
    max-width: 33.3vw;
    font-size: 1vw;
    line-height: 1.4vw;
    box-shadow: 0 .3vw 1.7vw #00000040;
}

.checkout-button {
    border-radius: var(--border-radius);
    background-color: var(--primary);
    color: var(--black);
    transition: background-color .3s, color .3s;
}

.checkout-button:hover {
    background-color: var(--black);
    color: var(--white);
}

.main-cart-quantity {
    color: var(--black);
    font-family: Archivo, sans-serif;
    line-height: 1.4vw;
}

.main-cart-quantity:hover,
.main-cart-quantity:active,
.main-cart-quantity:focus {
    color: var(--black);
}

.main-cart-quantity:focus-visible {
    color: var(--black);
}

.main-cart-quantity[data-wf-focus-visible],
.main-cart-quantity:lang(en) {
    color: var(--black);
}

.cart-footer {
    background-color: var(--secondary);
    border-top-width: 0;
}

.cart-header {
    border-bottom-color: var(--light-grey);
}

.cart {
    z-index: 999;
    color: var(--white);
}

.icon-wrapper-circle {
    border: .0625rem solid var(--primary);
    border-radius: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 6rem;
    max-width: 6rem;
    min-height: 6rem;
    max-height: 6rem;
    display: flex;
}

.timeline-line {
    background-color: var(--primary);
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: .0625rem;
    display: flex;
}

.red-font {
    color: #f77;
}

.input {
    color: var(--black);
}

.page-title-wrapper {
    text-align: left;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 4.4vw;
    padding-right: 4.4vw;
    display: flex;
    position: relative;
}

.page-title-block {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
}

.page-title-flex {
    align-items: flex-start;
    display: flex;
}

.lightbox-link-small {
    border-radius: var(--border-radius);
    overflow: hidden;
}

.works-block {
    grid-row-gap: 2.2vw;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
}

.reviews-slider-wrapper {
    background-color: #0000;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
}

.reviews-arrow {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: border-color .25s, color .25s;
    display: flex;
    position: relative;
    inset: auto 0% 2rem;
}

.reviews-arrow:hover {
    color: #9ef916;
    border-color: #9ef916;
}

.reviews-arrow.left {
    display: none;
    bottom: 4rem;
    left: -1.25rem;
    right: 0%;
}

.reviews-arrow.right {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 2.78vw;
    display: flex;
    position: absolute;
    inset: auto 0% 37% auto;
}

.badge {
    -webkit-backdrop-filter: blur(.5rem);
    backdrop-filter: blur(.5rem);
    background-color: #ffffff4d;
    justify-content: flex-start;
    align-items: flex-start;
    padding: .6vw 1.1vw;
    display: flex;
}

.price-card-description-wrapper {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
}

.price-title-wrapper {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
}

.not-centered {
    text-align: left;
}

.price-title {
    text-transform: uppercase;
}

.projects-title-grid {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr .4fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    display: grid;
}

.flex-title {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    flex-direction: column;
    font-weight: 100;
    display: flex;
}

.works-description {
    max-width: 30vw;
}

.projects-grid {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

.works-details-info {
    border-bottom: .07vw solid var(--primary);
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-width: 16.66vw;
    max-width: 16.66vw;
    padding-bottom: .56vw;
    display: flex;
}

.large-title {
    text-transform: uppercase;
    font-size: 10.4vw;
    line-height: 6.9vw;
}

.space-page-top {
    min-height: 11.11vw;
}

.contact-flex {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex;
}

.contact-block {
    grid-column-gap: .6vw;
    grid-row-gap: .6vw;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
}

.avatar-image {
    object-fit: cover;
    border-radius: 6.25rem;
    min-width: 3.3vw;
    max-width: 3.3vw;
    min-height: 3.3vw;
    max-height: 3.3vw;
}

.about-avatars-flex {
    grid-column-gap: .6vw;
    grid-row-gap: .6vw;
    justify-content: flex-start;
    align-items: flex-start;
    width: 10vw;
    margin-left: 6.67vw;
    display: flex;
    position: relative;
}

.avatar-a {
    border: .0625rem solid var(--white);
    background-color: var(--black);
    object-fit: cover;
    border-radius: 6.25rem;
    justify-content: center;
    align-items: center;
    min-width: 4.4vw;
    max-width: 4.4vw;
    min-height: 4.4vw;
    max-height: 4.4vw;
    display: flex;
    position: relative;
}

.avatar-c {
    border: .0625rem solid var(--white);
    background-color: var(--black);
    object-fit: cover;
    border-radius: 6.25rem;
    justify-content: center;
    align-items: center;
    min-width: 4.4vw;
    max-width: 4.4vw;
    min-height: 4.4vw;
    max-height: 4.4vw;
    display: flex;
    position: absolute;
    left: 5.6vw;
}

.button-icon {
    min-width: .9vw;
    max-width: .9vw;
    min-height: .9vw;
    max-height: .9vw;
}

.button-icon.works-arrow {
    min-width: .78vw;
    max-width: .78vw;
    min-height: .78vw;
    max-height: .78vw;
}

.about-title {
    text-transform: uppercase;
    font-size: 8.89vw;
    line-height: 6.55vw;
}

.avatar-b {
    border: .0625rem solid var(--white);
    background-color: var(--black);
    object-fit: cover;
    border-radius: 6.25rem;
    justify-content: center;
    align-items: center;
    min-width: 4.4vw;
    max-width: 4.4vw;
    min-height: 4.4vw;
    max-height: 4.4vw;
    display: flex;
    position: absolute;
    left: 2.8vw;
}

.slide-nav {
    display: none;
}

.max-width-25vw {
    max-width: 25vw;
}

.self-align-right {
    align-self: flex-end;
}

.works-details-block {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    text-align: left;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    inset: 0% 7.5% 0% auto;
}

.works-image {
    object-position: 50% 30%;
    width: 99.2%;
    height: 99%;
    position: absolute;
}

.button-ghost {
    grid-column-gap: .6vw;
    grid-row-gap: .6vw;
    justify-content: center;
    align-items: center;
    max-height: 1.11vw;
    display: flex;
    position: relative;
    overflow: hidden;
}

.works-link-wrapper {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    perspective: 100vh;
    transform-origin: 50%;
    cursor: pointer;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50vw;
    display: flex;
    position: relative;
    overflow: hidden;
}

.works-wrapper {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: sticky;
    top: 2rem;
}

.reviews-avatar-flex {
    grid-column-gap: 1.7vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.reviews-text-block {
    flex-direction: column;
    display: flex;
}

.font-primary {
    color: var(--primary);
}

.arrow-icon {
    object-fit: contain;
    min-height: 2.22vw;
    max-height: 2.22vw;
    transform: rotate(90deg);
}

.footer-logo-link-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
}

.footer-right-flex {
    grid-column-gap: 8vw;
    grid-row-gap: 8vw;
    justify-content: flex-end;
    align-items: flex-start;
    display: flex;
}

.footer-link {
    font-size: 1vw;
    line-height: 1.78vw;
}

.footer-link:hover {
    color: var(--light-grey);
}

.footer-link.w--current {
    color: #eee;
}

.footer-link.move-down {
    position: absolute;
    top: 100%;
}

.footer-link.move-down.w--current {
    color: #eee;
}

.footer-wrapper {
    grid-column-gap: 1.67vw;
    grid-row-gap: 1.67vw;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
}

.footer-footer-bottom {
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding-top: 2.2vw;
    padding-bottom: 2.2vw;
    display: flex;
}

.footer-flex {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.footer-logo {
    object-fit: cover;
    object-position: 50% 50%;
    min-height: 2.78vw;
    max-height: 2.78vw;
}

.footer-flex-bottom {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.footer-bottom-text:hover {
    color: #eee;
}

.footer-line {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    background-color: var(--primary);
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: .07vw;
    display: flex;
}

.footer-top {
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
    padding-top: 4.4vw;
    padding-bottom: 4.4vw;
    display: flex;
}

.footer-block {
    grid-column-gap: .6vw;
    grid-row-gap: .6vw;
    flex-flow: column;
    align-items: flex-start;
    display: flex;
}

.socials-wrapper {
    z-index: 1;
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    justify-content: center;
    align-items: center;
    display: flex;
}

.socials-wrapper.hero {
    position: absolute;
    bottom: 11.11vw;
    right: 2.22vw;
    transform: rotate(90deg);
}

.social-icon {
    background-image: radial-gradient(circle closest-side at 50% 50%, var(--primary) 80%, var(--black) 90%);
    object-fit: cover;
    border-radius: 100%;
    min-width: 2.2vw;
    max-width: 2.2vw;
    min-height: 2.2vw;
    max-height: 2.2vw;
}

.social-icon.hero-smaller {
    background-image: radial-gradient(circle closest-side at 50% 50%, var(--white) 80%, var(--black) 90%);
    filter: invert();
    min-width: 1.1vw;
    max-width: 1.1vw;
    min-height: 1.1vw;
    max-height: 1.1vw;
    transform: rotate(-90deg);
}

.social-icon.smaller {
    background-image: radial-gradient(circle closest-side at 50% 50%, var(--white) 80%, var(--black) 90%);
    filter: invert();
    min-width: 1.1vw;
    max-width: 1.1vw;
    min-height: 1.1vw;
    max-height: 1.1vw;
}

.about-icon {
    min-width: 3.3vw;
    max-width: 3.3vw;
    min-height: 3.3vw;
    max-height: 3.3vw;
}

.vision-wrapper {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
}

.vision-text-block {
    max-width: 60vw;
    position: relative;
}

.text-overlay {
    z-index: 3;
    background-color: #050505a6;
    width: 0%;
    min-height: 4.4vw;
    position: absolute;
    inset: 0% -.0625rem auto auto;
}

.text-overlay.row-03 {
    top: 8.8vw;
}

.text-overlay.row-02 {
    top: 4.4vw;
}

.form-wrapper {
    width: 40.3vw;
    min-width: 40.3vw;
    max-width: 40.3vw;
}

.field-label {
    font-size: .9vw;
    line-height: 1.4vw;
}

.form-text-block {
    font-size: 1vw;
    line-height: 1.4vw;
}

.message-area {
    border: .1vw solid var(--secondary);
    border-radius: var(--border-radius);
    background-color: var(--secondary);
    color: var(--white);
    min-height: 7.8vw;
    margin-bottom: .6vw;
    padding: 1.1vw;
    font-size: 1vw;
    line-height: 1.4vw;
}

.message-area::placeholder {
    color: #868686;
}

.contact-card {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    border-radius: var(--border-radius);
    background-color: var(--secondary);
    justify-content: flex-start;
    align-items: center;
    width: 25vw;
    min-height: 8.9vw;
    padding: 1.1vw 2.2vw;
    display: flex;
}

.icon-wrapper {
    background-color: var(--primary);
    text-align: center;
    border-radius: 4.2vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 4.4vw;
    height: 4.4vw;
    display: flex;
}

.contact-icon-image {
    min-width: 2.2vw;
    height: 2.2vw;
}

.utilities-icon {
    min-width: 2.8vw;
    height: 2.8vw;
}

.max-width-17vw {
    max-width: 17vw;
}

.button-group {
    grid-column-gap: .28vw;
    grid-row-gap: .28vw;
}

.button-arrow-wrapper {
    background-color: var(--white);
    box-shadow: -1rem 0rem 1rem 0 var(--black);
    cursor: pointer;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    min-width: 3.11vw;
    max-width: 3.11vw;
    min-height: 3.11vw;
    max-height: 3.11vw;
    display: flex;
    position: relative;
    left: -1.11vw;
    overflow: hidden;
}

.button-with-circle-icon {
    text-transform: uppercase;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    min-width: 12.22vw;
    transition: background-color .25s;
    display: flex;
    position: relative;
}

.button-text-absolute {
    margin-bottom: 0;
    font-size: 1.11vw;
    line-height: 1.89vw;
    display: none;
    position: absolute;
    left: 2.22vw;
}

.works-button {
    font-size: 1vw;
    line-height: 1.78vw;
}

.works-button-absolute {
    font-size: 1vw;
    line-height: 1.78vw;
    position: absolute;
    left: 0;
}

.hero-icon {
    min-width: 2.2vw;
    max-width: 2.2vw;
    min-height: 2.2vw;
    max-height: 2.2vw;
}

.space-2rem {
    min-height: 2.2vw;
}

.space-1rem {
    min-height: 1.1vw;
}

.no-wrap {
    white-space: nowrap;
}

.space-0-5rem {
    min-height: .56vw;
}

.space-8rem {
    min-height: 8.9vw;
}

.font-dark-gray {
    color: #777;
}

.space-4rem {
    min-height: 4.4vw;
}

.arrow-border-wrapper {
    z-index: 10;
    cursor: pointer;
    border: 1px solid #050505;
    border-radius: 100%;
    justify-content: center;
    align-self: flex-end;
    align-items: center;
    display: flex;
    position: relative;
}

.hero-section {
    z-index: 99;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
}

.hero-text {
    text-transform: uppercase;
    font-size: 6vw;
    font-weight: 600;
    line-height: 11.11vw;
    position: relative;
    left: -1.11vw;
}

.spline {
    z-index: 1;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    inset: 5% 0% 0%;
}

.hero-overlay {
    z-index: 10;
    background-image: linear-gradient(#0000, #050505);
    position: absolute;
    inset: 95% 0% 0%;
}

.hero-wrapper {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 54vw;
    height: 100vh;
    margin-right: auto;
    display: flex;
    position: relative;
}

.hero-bg {
    z-index: -1;
    background-image: linear-gradient(180deg, #050505, var(--primary));
    opacity: .1;
    background-repeat: repeat;
    background-size: auto;
    position: absolute;
    inset: 0%;
}

.icon-wrapper-small {
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    min-width: 2.8vw;
    max-width: 2.8vw;
    min-height: 2.8vw;
    max-height: 2.8vw;
    display: flex;
    overflow: hidden;
}

.hero-flex {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    justify-content: center;
    align-items: center;
    display: flex;
}

.hero-space-top {
    min-height: 9rem;
}

.hero-card-title {
    line-height: 2.22vw;
}

.hero-text-flex {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    justify-content: center;
    align-items: center;
    display: flex;
}

.button-flex {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    border: .1vw solid var(--light-grey);
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 8.9vw;
    justify-content: center;
    align-items: center;
    min-height: 3.11vw;
    padding: .14vw 2.22vw;
    transition: background-color .25s;
    display: flex;
    position: relative;
    overflow: hidden;
}

.icon-small {
    object-fit: contain;
    min-width: .9vw;
    max-width: .9vw;
    min-height: .9vw;
    max-height: .9vw;
}

.hero-subheading-flex {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    justify-content: center;
    align-items: center;
    display: flex;
}

.hero-cards-wrapper {
    z-index: 10;
    perspective: 100vh;
    transform-origin: 50%;
    position: relative;
}

.hero-card {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    border-radius: var(--border-radius);
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    transform-origin: 50%;
    transform-style: preserve-3d;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-width: 16.7vw;
    max-width: 16.7vw;
    min-height: 11.2vw;
    max-height: 11.2vw;
    display: flex;
    transform: perspective(100vh)rotateX(8deg)rotateY(16deg)rotateZ(0)perspective(128px);
}

.works-cut-out {
    z-index: 99;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6702729013f0197572491c6c_Cut%20Out%20Works.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    position: absolute;
}

.works-image-wrapper {
    z-index: 99;
    background-color: var(--black);
    transform-origin: 50%;
    transform-style: preserve-3d;
    justify-content: center;
    align-items: center;
    min-width: 64vw;
    max-width: 64vw;
    min-height: 36vw;
    max-height: 36vw;
    display: flex;
    position: relative;
    left: -5%;
    transform: rotateX(8deg)rotateY(16deg)rotateZ(0);
}

.works-single-cut-out {
    z-index: 99;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/6702729013f0197572491c6c_Cut%20Out%20Works.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    position: absolute;
}

.works-single-wrapper {
    z-index: 99;
    background-color: var(--black);
    justify-content: center;
    align-items: center;
    min-width: 72vw;
    max-width: 72vw;
    min-height: 40.5vw;
    max-height: 40.5vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
}

.brands-wrapper {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.brands-grid {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    opacity: .2;
    filter: invert();
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    overflow: hidden;
}

.logos-wrapper {
    z-index: 2;
    flex-direction: column;
    flex: auto;
    justify-content: center;
    align-items: center;
    min-width: 6.67vw;
    max-width: 6.67vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.brands-block {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
}

.max-width-57rem {
    max-width: 63.33vw;
}

.about-block {
    flex-flow: column;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
}

.services-card-text {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
}

.services-cards-block {
    grid-column-gap: 4.44vw;
    grid-row-gap: 4.44vw;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    display: flex;
}

.metrics-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.metrics-text {
    font-size: 4vw;
    font-weight: 200;
    line-height: 8.611vw;
}

.metrics-text-block {
    grid-column-gap: .5vw;
    grid-row-gap: .5vw;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    overflow: hidden;
}

.about-text-flex {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    justify-content: space-between;
    display: flex;
}

.vision-text {
    color: #f5f5f5;
    text-align: center;
    font-weight: 200;
    line-height: 4.4vw;
}

.reviews-slide {
    text-align: left;
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-end;
    display: flex;
    position: relative;
}

.reviews-avatar {
    border-radius: 100%;
    min-width: 4.4vw;
    max-width: 4.4vw;
    min-height: 4.4vw;
    max-height: 4.4vw;
}

.reviews-text {
    text-transform: none;
    max-width: 57vw;
    font-size: 3.89vw;
    font-weight: 400;
    line-height: 5vw;
}

.mask {
    max-width: 100%;
}

.reviews-images {
    object-fit: contain;
    min-width: 7vw;
    max-width: 7vw;
    position: absolute;
    inset: -2.2vw auto auto .2%;
}

.title {
    text-transform: uppercase;
    font-size: 72px;
    line-height: 54px;
}

.cta-block {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    transform-style: preserve-3d;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    transform: perspective(100vh)rotateX(32deg)rotateY(0)rotateZ(0)perspective(100vh);
}

.cta-large {
    font-size: 10vw;
    line-height: 7.22vw;
}

.cta-text-block {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    flex-direction: column;
    align-items: center;
    display: flex;
}

.card {
    border-radius: var(--border-radius);
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    transform-origin: 50%;
    transform-style: preserve-3d;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67022f5c84c9505a513e0f31_Blur.png");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 500% 500%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 16.7vw;
    max-width: 16.7vw;
    min-height: 11.2vw;
    max-height: 11.2vw;
    display: flex;
    transform: perspective(100vh)rotateX(8deg)rotateY(-16deg)rotateZ(0)perspective(128px);
}

.card.large-card {
    object-position: 42% 50%;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67038dd51127140791a4bc7c_PosterMockup.jpg");
    background-position: 42%;
    background-size: cover;
}

.card.gap-0-5rem {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    overflow: hidden;
}

.card.services-3d-card {
    background-position: 50%;
    position: relative;
    left: -10%;
}

.card.no-background {
    background-image: none;
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto;
}

.cards-wrapper {
    z-index: 10;
    perspective: 100vh;
    transform-origin: 50%;
    position: relative;
}

.card-flex {
    grid-column-gap: 4.44vw;
    grid-row-gap: 4.44vw;
    text-align: left;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    position: relative;
}

.line-wrapper {
    background-color: #0000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: .1vw;
    position: relative;
    overflow: hidden;
}

.line-progress {
    background-color: #eee;
    min-width: 100%;
    min-height: .1vw;
}

.skills-details-wrapper {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    background-color: #0000;
    border-radius: 24px;
    flex-direction: column;
    justify-content: center;
    min-width: 29.2vw;
    max-width: 29.2vw;
    padding-top: 4.4vw;
    padding-bottom: 4.4vw;
    padding-left: 4.4vw;
    display: flex;
}

.skills-content-wrapper {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    text-align: left;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 25vw;
    max-width: 25vw;
    display: flex;
}

.skills-block-wrapper {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    text-align: left;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.title-flex {
    grid-column-gap: .9vw;
    flex-flow: row;
    align-items: flex-start;
    display: flex;
}

.large-card {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    border-radius: var(--border-radius);
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    transform-origin: 50%;
    transform-style: preserve-3d;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67022f5c84c9505a513e0f31_Blur.png");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 500% 500%;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-width: 29.2vw;
    max-width: 29.2vw;
    min-height: 38.7vw;
    max-height: 38.7vw;
    display: flex;
    transform: perspective(100vh)rotateX(8deg)rotateY(-16deg)rotateZ(0)perspective(128px);
}

.cut-out {
    object-position: 100% 0%;
    align-self: flex-end;
    width: 45%;
    height: 45%;
}

.card-small-image {
    border-radius: 12px;
    min-width: 80%;
    max-width: 80%;
    min-height: 5vw;
    max-height: 5vw;
}

.card-title {
    line-height: 2.22vw;
}

.services-image {
    border-radius: 12px;
    min-width: 17.8vw;
    max-width: 17.8vw;
    min-height: 10vw;
    max-height: 10vw;
}

.services-flex {
    grid-column-gap: 4.44vw;
    grid-row-gap: 4.44vw;
    justify-content: center;
    align-items: flex-start;
    display: flex;
}

.services-3d-card {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    border-radius: var(--border-radius);
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    transform-origin: 50%;
    transform-style: preserve-3d;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67022f5c84c9505a513e0f31_Blur.png");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 500% 500%;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-width: 29.2vw;
    max-width: 29.2vw;
    min-height: 19.4vw;
    max-height: 19.4vw;
    display: flex;
    transform: perspective(100vh)rotateX(8deg)rotateY(-16deg)rotateZ(0)perspective(128px);
}

.view-more-flex {
    grid-column-gap: .28vw;
    grid-row-gap: .28vw;
    opacity: 0;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    right: 3%;
    transform: rotate(90deg);
}

.cards-flex {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    justify-content: center;
    align-items: center;
    display: flex;
}

.large-icon {
    object-fit: contain;
    min-width: 8.9vw;
    max-width: 8.9vw;
    min-height: 8.9vw;
    max-height: 8.9vw;
}

.services-cards-wrapper {
    z-index: 10;
    perspective: 100vh;
    transform-origin: 50%;
    position: relative;
}

.show-on-tab {
    display: none;
}

.spline-tab-down {
    z-index: -1;
    opacity: 0;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    display: none;
    position: absolute;
    inset: 0%;
}

.arrow-image {
    align-self: flex-start;
    min-width: 16px;
    max-width: 16px;
    min-height: 16px;
    max-height: 16px;
}

.about-title-block {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    flex-flow: column;
    align-items: flex-start;
    width: 100%;
    display: flex;
}

.about-title-flex {
    grid-column-gap: .56vw;
    grid-row-gap: .56vw;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}

.space-top {
    min-height: 160px;
}

.about-description {
    text-align: right;
    align-self: flex-end;
}

.about-cards-flex {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
}

.spinner-image {
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67021bf42ce586086aea6b3a_Star.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3.9vw;
    height: 3.9vw;
    display: flex;
}

.card-gradient {
    background-image: linear-gradient(90deg, var(--transparent), var(--primary));
    border-radius: 8px;
    min-width: 80%;
    max-width: 80%;
    min-height: 2.22vw;
    max-height: 2.22vw;
}

.about-card-image {
    pointer-events: auto;
    transform-origin: 50%;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
    min-height: 11.2vw;
    max-height: 11.2vw;
    display: flex;
    position: relative;
    transform: translate(0);
}

.about-card-image-back {
    z-index: 2;
    border-radius: var(--border-radius);
    transform-origin: 50%;
    transform-style: preserve-3d;
    flex-flow: column;
    flex: none;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
    min-height: 11.2vw;
    max-height: 11.2vw;
    display: flex;
    position: absolute;
    overflow: hidden;
    transform: rotateX(180deg)rotateY(0)rotateZ(0)translate3d(0, 0, 0);
}

.about-card-image-front {
    z-index: 2;
    border-radius: var(--border-radius);
    transform-style: preserve-3d;
    flex-flow: column;
    flex: none;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
    min-height: 11.2vw;
    max-height: 11.2vw;
    display: flex;
    position: absolute;
    overflow: hidden;
    transform: translate3d(0, 0, .1px);
}

.hero-card-image {
    pointer-events: auto;
    transform-origin: 50%;
    justify-content: center;
    align-items: center;
    min-width: 80%;
    max-width: 80%;
    min-height: 5vw;
    max-height: 5vw;
    display: flex;
    position: relative;
    transform: translate(0);
}

.hero-card-image-back {
    z-index: 2;
    transform-origin: 50%;
    transform-style: preserve-3d;
    border-radius: 12px;
    flex-flow: column;
    flex: none;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
    min-height: 5vw;
    max-height: 5vw;
    display: flex;
    position: absolute;
    overflow: hidden;
    transform: rotateX(180deg)rotateY(0)rotateZ(0)translate3d(0, 0, 0);
}

.hero-card-image-front {
    z-index: 2;
    transform-style: preserve-3d;
    border-radius: 12px;
    flex-flow: column;
    flex: none;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
    min-height: 5vw;
    max-height: 5vw;
    display: flex;
    position: absolute;
    overflow: hidden;
    transform: translate3d(0, 0, .1px);
}

.avatars-flex {
    grid-column-gap: .6vw;
    grid-row-gap: .6vw;
    justify-content: flex-start;
    align-items: flex-start;
    width: 10vw;
    display: flex;
    position: relative;
}

.max-width-45rem {
    max-width: 50vw;
}

.timeline-block {
    z-index: 2;
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67022f5c84c9505a513e0f31_Blur.png");
    background-position: 50%;
    background-size: 500% 500%;
    border-radius: 32px;
    flex-direction: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr 12rem 1fr;
    grid-auto-columns: 1fr;
    padding: 2.2vw;
    display: flex;
}

.timeline-flex {
    grid-column-gap: 2.22vw;
    grid-row-gap: 2.22vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    place-items: flex-start center;
    display: flex;
    position: relative;
}

.timeline-left {
    grid-column-gap: 1.11vw;
    grid-row-gap: 1.11vw;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 50%;
    display: flex;
    position: sticky;
    top: 4rem;
}

.timeline-right {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    flex-flow: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: flex;
}

.teams-image {
    aspect-ratio: 3 / 4;
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    transform-origin: 50%;
    transform-style: preserve-3d;
    background-image: url("https://cdn.prod.website-files.com/67021bf42ce586086aea69c0/67022f5c84c9505a513e0f31_Blur.png");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 500% 500%;
    border-radius: 24px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 18.89vw;
    max-width: 18.89vw;
    display: flex;
    transform: perspective(100vh)rotateX(8deg)rotateY(16deg)rotateZ(0)perspective(128px);
}

.teams-card-wrapper {
    z-index: 10;
    perspective: 100vh;
    transform-origin: 50%;
    position: relative;
}

.logo-icon {
    opacity: .1;
    max-width: 8.89vw;
    position: absolute;
    inset: 0% 0% auto auto;
}

.teams-title-wrapper {
    grid-column-gap: 1.1vw;
    grid-row-gap: 1.1vw;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
}

.team-block {
    grid-column-gap: .6vw;
    grid-row-gap: .6vw;
    padding-top: 2.22vw;
}

.team-flex-01 {
    grid-column-gap: 2.2vw;
    grid-row-gap: 2.2vw;
    justify-content: flex-start;
    position: relative;
}

.team-flex-03 {
    grid-column-gap: 2.2vw;
    justify-content: flex-end;
    position: relative;
    top: -256px;
}

.team-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}

.team-grid {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    min-width: 80%;
    max-width: 80%;
    max-height: 66vw;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    position: relative;
    top: 4.44vw;
}

.team-flex-02 {
    grid-column-gap: 2.2vw;
    justify-content: center;
    position: relative;
    top: -128px;
    left: 8px;
}

.show-on-mobile {
    display: none;
}

.services-description {
    text-align: right;
    max-width: 27vw;
}

.background-light-black {
    background-color: #111;
}

.reviews-space-bottom {
    min-height: 4.44vw;
}

.reviews-space-top {
    min-height: 6.67vw;
}

@media screen and (max-width: 991px) {
    body {
        font-size: .88rem;
        line-height: 1.25rem;
    }
    h1 {
        letter-spacing: -.0625rem;
        font-size: 4rem;
        line-height: 4.5rem;
    }
    h2 {
        letter-spacing: -.06rem;
        font-size: 3.5rem;
        line-height: 4rem;
    }
    h3 {
        letter-spacing: -.0625rem;
        font-size: 3rem;
        line-height: 3.5rem;
    }
    h4 {
        letter-spacing: -.0625rem;
        font-size: 2.5rem;
        line-height: 3rem;
    }
    h5 {
        letter-spacing: .13rem;
        font-size: .8rem;
        line-height: 1.3rem;
    }
    h6 {
        letter-spacing: .125rem;
        font-size: .7rem;
        line-height: 1.2rem;
    }
    p {
        letter-spacing: .06rem;
        font-size: 1rem;
        line-height: 1.7rem;
    }
    a {
        letter-spacing: .06rem;
        font-size: 1rem;
        line-height: 1.6rem;
    }
    ul {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        padding-left: 2.5rem;
    }
    li {
        letter-spacing: .06rem;
        font-size: 1rem;
        line-height: 1.7rem;
    }
    sup {
        font-size: 1rem;
        line-height: 1rem;
        top: -1rem;
    }
    blockquote {
        margin-bottom: 0;
        padding: .5rem 0 .5rem 1.5rem;
        font-size: 1rem;
        line-height: 1.7rem;
    }
    .container.padding-13-5rem,
    .container.padding-9rem,
    .container.padding-4-5rem {
        padding-left: 10%;
        padding-right: 10%;
    }
    .submit-button {
        letter-spacing: .0625rem;
        border-radius: 1.5rem;
        padding: .7rem 2rem;
        font-size: 1rem;
        line-height: 1.7rem;
    }
    .faq-text-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        text-align: center;
        align-items: center;
        width: 100%;
        height: auto;
    }
    .max-width-480px {
        max-width: 30rem;
    }
    .navbar {
        height: 7rem;
        padding-left: 5%;
        padding-right: 5%;
    }
    .logo-link-wrapper {
        z-index: 999;
        min-height: auto;
    }
    .nav-link {
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 6rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 4rem;
        line-height: 6rem;
        display: flex;
    }
    .nav-menu {
        background-color: var(--secondary);
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
        padding-top: 8rem;
        position: fixed;
        inset: 0%;
    }
    .trigger {
        min-height: 7rem;
    }
    .faq-wrapper {
        grid-column-gap: 2.22rem;
        grid-row-gap: 2.22rem;
        width: 100%;
    }
    .dropdown-toggle {
        padding-top: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .faq-flex {
        grid-column-gap: 1.88rem;
    }
    .faq-icon {
        min-width: 1.88rem;
        max-width: 1.88rem;
        min-height: 1.88rem;
        max-height: 1.88rem;
    }
    .contact-success-message {
        border-width: .1rem;
        border-radius: 1.25rem;
        padding: 1.5rem 2rem;
    }
    .text-field {
        border-width: .1rem;
        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: .88rem;
        line-height: 1.25rem;
    }
    .contact-error-message {
        margin-top: 2rem;
        padding: 1.5rem 2rem;
    }
    .utilities-side-bar {
        border-right-width: .06rem;
        min-width: 20rem;
        max-width: 20rem;
        padding-left: 2rem;
        padding-right: 2rem;
        display: none;
        top: 2rem;
    }
    .utilities-title {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .utilities-flex-title {
        grid-column-gap: .75rem;
        grid-row-gap: .75rem;
    }
    .utilities-wrapper {
        width: 100%;
    }
    .background-black {
        padding: 1.25rem;
    }
    .utilities-line {
        min-width: 2rem;
        min-height: .25rem;
    }
    .utilities-line-spacer {
        min-height: .06rem;
    }
    .logo {
        min-height: 1.5rem;
        max-height: 1.5rem;
    }
    .image-wrapper {
        min-height: auto;
        max-height: none;
    }
    .title-text-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .text-align-right {
        text-align: left;
    }
    .text-block {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        justify-content: flex-start;
        align-items: center;
    }
    .flex-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .services-card-wrapper {
        flex-wrap: wrap-reverse;
    }
    .works-details {
        max-width: 37.5rem;
    }
    .works-rich-text {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .services-details {
        max-width: 37.5rem;
    }
    .services-rich-text {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .flex {
        grid-column-gap: .7rem;
    }
    .works-grid-thirds {
        grid-column-gap: 2rem;
    }
    .service-project-title {
        font-size: 5.625rem;
        line-height: 5.625rem;
    }
    .contact-wrapper {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-flow: wrap;
        justify-content: center;
    }
    .faq-main-wrapper {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        flex-wrap: wrap;
    }
    .hide-on-tab {
        display: none;
    }
    .utitlities-title-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        text-align: center;
        align-items: center;
        width: 100%;
        height: auto;
    }
    .packages-row {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .price-card {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        min-width: 90vw;
        max-width: 90vw;
        padding: 3rem 1rem 3rem 4rem;
    }
    .price-card-title {
        font-size: 2.3rem;
        line-height: 2.3rem;
    }
    .bulleted-description-wrapper {
        max-width: 15rem;
        margin-bottom: .6rem;
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }
    .bulleted-description {
        border-bottom-width: .1rem;
        padding-top: .7rem;
        padding-bottom: .7rem;
    }
    .button {
        letter-spacing: .0625rem;
        padding: .7rem 2rem;
        font-size: 1rem;
        line-height: 1.7rem;
    }
    .page-grid {
        grid-column-gap: 3.8rem;
        grid-row-gap: 3.8rem;
        flex-direction: column;
        display: flex;
    }
    .side-bar-left {
        margin-top: 0;
        position: static;
    }
    .package-button-wrapper {
        margin-top: 1.3rem;
    }
    .fix-scroll-container-products {
        max-width: 100%;
    }
    .row-content {
        width: 100%;
    }
    .brochure-card {
        grid-row-gap: 1rem;
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
        padding: 2.3rem 2rem;
    }
    .package-text-wrapper {
        width: 100%;
    }
    .products-title {
        white-space: normal;
    }
    .font-black {
        color: var(--black);
        -webkit-text-stroke-color: var(--black);
    }
    .nav-container {
        justify-content: flex-start;
        margin-left: auto;
    }
    .outline-white {
        -webkit-text-stroke-width: .0625rem;
    }
    .button-text {
        font-size: 1rem;
        line-height: 1.7rem;
    }
    .title-wrapper {
        width: 90%;
    }
    .title-block {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .lightbox-link {
        margin-bottom: 2rem;
    }
    .package-title {
        max-width: 37.5rem;
    }
    .faq-question {
        font-size: 1.5rem;
        line-height: 2.13rem;
    }
    .cart-button {
        margin-left: 1rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: .5rem;
    }
    .cart-quantity {
        min-width: 1rem;
        height: 1rem;
        margin-left: 0;
        padding-left: 1rem;
        padding-right: 0;
    }
    .cart-container {
        min-width: 20rem;
        max-width: 30rem;
        font-size: .88rem;
        line-height: 1.25rem;
        box-shadow: 0 .31rem 1.56rem #00000040;
    }
    .main-cart-quantity {
        line-height: 1.25rem;
    }
    .icon-wrapper-circle {
        min-width: 4.5rem;
        max-width: 4.5rem;
        min-height: 4.5rem;
        max-height: 4.5rem;
    }
    .page-title-wrapper {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-direction: column;
        align-items: center;
        padding-left: 4rem;
        padding-right: 4rem;
    }
    .page-title-block {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
    }
    .page-title-flex {
        flex-wrap: wrap;
        justify-content: center;
    }
    .menu-button {
        z-index: 999;
        background-color: #0000;
        padding: 1rem 0 1rem 1rem;
    }
    .menu-button.w--open {
        background-color: #0000;
    }
    .burger-icon {
        color: var(--black);
        font-size: 1.875rem;
    }
    .works-block {
        grid-row-gap: 4rem;
    }
    .reviews-slider-wrapper {
        flex-direction: column;
    }
    .reviews-arrow {
        position: relative;
    }
    .reviews-arrow.left {
        bottom: 3rem;
    }
    .reviews-arrow.right {
        min-height: 2.5rem;
        bottom: .5rem;
    }
    .badge {
        margin-bottom: .5rem;
        padding: .5rem 1rem;
    }
    .price-card-description-wrapper {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        justify-content: center;
        align-items: center;
    }
    .price-title-wrapper {
        justify-content: center;
        align-items: center;
        width: 90%;
    }
    .not-centered,
    .price-title {
        text-align: center;
    }
    .projects-title-grid {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0%;
        padding-right: 0%;
    }
    .flex-title {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
    }
    .works-description {
        max-width: 20.625rem;
    }
    .projects-grid {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .works-details-info {
        border-bottom-width: .1rem;
        min-width: 15rem;
        max-width: 15rem;
        padding-bottom: .5rem;
    }
    .large-title {
        font-size: 6rem;
        line-height: 4.5rem;
    }
    .space-page-top {
        min-height: 10rem;
    }
    .contact-flex {
        flex-flow: wrap;
    }
    .contact-block {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
    }
    .avatar-image {
        min-width: 3rem;
        max-width: 3rem;
        min-height: 3rem;
        max-height: 3rem;
    }
    .about-avatars-flex {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        width: 9rem;
        margin-left: 0;
    }
    .avatar-a {
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
    }
    .avatar-c {
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
        left: 5rem;
    }
    .button-icon {
        min-width: .8rem;
        max-width: .8rem;
        min-height: .8rem;
        max-height: .8rem;
    }
    .button-icon.works-arrow {
        min-width: .7rem;
        max-width: .7rem;
        min-height: .7rem;
        max-height: .7rem;
    }
    .about-title {
        font-size: 12vw;
        line-height: 9vw;
    }
    .avatar-b {
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
        left: 2.5rem;
    }
    .max-width-25vw {
        max-width: 22.5rem;
    }
    .max-width-25vw.self-align-right.text-align-right {
        text-align: center;
        align-self: center;
    }
    .works-details-block {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        position: static;
    }
    .button-ghost {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        max-height: none;
    }
    .works-link-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        min-height: auto;
    }
    .works-wrapper {
        flex-wrap: wrap;
        position: static;
    }
    .reviews-avatar-flex {
        grid-column-gap: 1.5rem;
    }
    .arrow-icon {
        min-height: 2rem;
        max-height: 2rem;
    }
    .footer-logo-link-wrapper {
        z-index: 1000000;
    }
    .footer-right-flex {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .footer-link {
        font-size: .9rem;
        line-height: 1.6rem;
    }
    .footer-wrapper {
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
    }
    .footer-footer-bottom {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        text-align: center;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .footer-flex {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .footer-logo {
        min-height: 2.5rem;
        max-height: 2.5rem;
    }
    .footer-line {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        height: .06rem;
    }
    .footer-top {
        max-width: 100%;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .footer-block {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
    }
    .socials-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .socials-wrapper.hero {
        bottom: 25%;
        right: 2rem;
    }
    .social-icon {
        min-width: 2rem;
        max-width: 2rem;
        min-height: 2rem;
        max-height: 2rem;
    }
    .social-icon.hero-smaller,
    .social-icon.smaller {
        min-width: 1rem;
        max-width: 1rem;
        min-height: 1rem;
        max-height: 1rem;
    }
    .about-icon {
        min-width: 3rem;
        max-width: 3rem;
        min-height: 3rem;
        max-height: 3rem;
    }
    .vision-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-wrap: wrap;
    }
    .vision-text-block {
        max-width: 35rem;
    }
    .text-overlay {
        min-height: 3rem;
    }
    .text-overlay.row-03 {
        top: 6rem;
    }
    .text-overlay.row-02 {
        top: 3rem;
    }
    .form-wrapper {
        width: 36.3rem;
        min-width: 36.3rem;
        max-width: 36.3rem;
    }
    .field-label {
        font-size: .81rem;
        line-height: 1.25rem;
    }
    .form-text-block {
        font-size: .88rem;
        line-height: 1.25rem;
    }
    .message-area {
        border-width: .06rem;
        min-height: 7rem;
        margin-bottom: .5rem;
        padding: 1rem;
        font-size: .9rem;
        line-height: 1.3rem;
    }
    .contact-card {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        width: 22.5rem;
        min-height: 8rem;
        padding: 1rem 2rem;
    }
    .icon-wrapper {
        border-radius: 3.75rem;
        min-width: 4rem;
        height: 4rem;
    }
    .contact-icon-image {
        min-width: 2rem;
        height: 2rem;
    }
    .utilities-icon {
        min-width: 2.5rem;
        height: 2.5rem;
    }
    .max-width-17vw {
        max-width: 15rem;
    }
    .button-group {
        grid-column-gap: .25rem;
        grid-row-gap: .25rem;
    }
    .button-arrow-wrapper {
        min-width: 2.8rem;
        max-width: 2.8rem;
        min-height: 2.8rem;
        max-height: 2.8rem;
        left: -1rem;
    }
    .button-with-circle-icon {
        min-width: 11rem;
    }
    .button-text-absolute {
        font-size: 1rem;
        line-height: 1.7rem;
    }
    .works-button,
    .works-button-absolute {
        font-size: .9rem;
        line-height: 1.6rem;
    }
    .hide-on-mobile {
        display: block;
    }
    .hero-icon {
        min-width: 2rem;
        max-width: 2rem;
        min-height: 2rem;
        max-height: 2rem;
    }
    .space-2rem {
        min-height: 2rem;
    }
    .space-1rem {
        min-height: 1rem;
    }
    .space-0-5rem {
        min-height: .5rem;
    }
    .space-8rem {
        min-height: 8rem;
    }
    .space-4rem {
        min-height: 4rem;
    }
    .arrow-border-wrapper {
        align-self: center;
        min-width: 2.5rem;
        max-width: 2.5rem;
        min-height: 2.5rem;
        max-height: 2.5rem;
    }
    .hero-text {
        text-align: center;
        font-size: 9.4rem;
        line-height: 7rem;
        left: auto;
    }
    .spline {
        z-index: -1;
        min-height: 65vh;
        max-height: 65vh;
        display: none;
        position: relative;
        top: 0%;
    }
    .hero-overlay {
        display: none;
    }
    .hero-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        width: 35rem;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
    .hero-bg {
        display: none;
    }
    .icon-wrapper-small {
        min-width: 2.5rem;
        max-width: 2.5rem;
        min-height: 2.5rem;
        max-height: 2.5rem;
        top: 2.75rem;
        left: 2.75rem;
    }
    .hero-flex {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        margin-bottom: .5rem;
    }
    .hero-space-top {
        min-height: 10rem;
    }
    .hero-text-flex {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .button-flex {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        border-width: .09rem;
        border-radius: 12rem;
        min-width: 11rem;
        min-height: 2.8rem;
        padding: .125rem 2rem;
    }
    .icon-small {
        min-width: .8rem;
        max-width: .8rem;
        min-height: .8rem;
        max-height: .8rem;
    }
    .hero-subheading-flex {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
    }
    .hero-card {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        border: 1px solid var(--dark-gray);
        min-width: 15rem;
        max-width: 15rem;
        min-height: 10.1rem;
        max-height: 10.1rem;
        position: relative;
        left: 3%;
    }
    .works-image-wrapper {
        min-width: 37.25rem;
        max-width: 37.25rem;
        min-height: 20.95rem;
        max-height: 20.95rem;
        left: auto;
        transform: rotate(0);
    }
    .works-single-wrapper {
        min-width: 37.25rem;
        max-width: 37.25rem;
        min-height: 20.95rem;
        max-height: 20.95rem;
    }
    .brands-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .brands-grid {
        grid-column-gap: 0vw;
        grid-row-gap: 0vw;
        grid-template-columns: 1fr 1fr;
    }
    .logos-wrapper {
        min-width: 6rem;
        max-width: 6rem;
    }
    .max-width-57rem {
        max-width: 100%;
    }
    .services-cards-block {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        flex-wrap: wrap;
    }
    .metrics-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-wrap: wrap;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
    }
    .metrics-text {
        font-size: 7rem;
        line-height: 7rem;
    }
    .metrics-text-block {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    .about-text-flex {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        text-align: center;
        flex-flow: column;
        align-items: center;
    }
    .vision-text {
        line-height: 3rem;
    }
    .reviews-slide {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
    }
    .reviews-avatar {
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
    }
    .reviews-text {
        max-width: 35rem;
        font-size: 3.5rem;
        line-height: 4.5rem;
    }
    .reviews-images {
        min-width: 6.3rem;
        max-width: 6.3rem;
        top: -2rem;
    }
    .cta-block {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
    }
    .cta-large {
        text-align: center;
        font-size: 7rem;
        line-height: 6.5rem;
    }
    .cta-text-block {
        grid-column-gap: 0vw;
        grid-row-gap: 0vw;
    }
    .card {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        min-width: 15rem;
        max-width: 15rem;
        min-height: 11rem;
        max-height: 11rem;
    }
    .card.large-card {
        position: relative;
        left: -7.5%;
    }
    .card.gap-0-5rem {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
    }
    .card.services-3d-card {
        left: -7%;
    }
    .card-flex {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 4rem;
    }
    .line-wrapper,
    .line-progress {
        min-height: .1rem;
    }
    .skills-details-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        justify-content: center;
        min-width: 35rem;
        max-width: 35rem;
        min-height: auto;
        max-height: none;
        padding: 0 4rem;
    }
    .skills-content-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        min-width: 22.5rem;
        max-width: 22.5rem;
    }
    .skills-block-wrapper {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        justify-content: space-around;
        align-items: center;
    }
    .title-flex {
        grid-column-gap: .8rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
    }
    .large-card {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        min-width: 26.25rem;
        max-width: 26.25rem;
        min-height: 34.84rem;
        max-height: 34.84rem;
        padding: 2rem;
    }
    .card-small-image {
        min-height: 5rem;
        max-height: 5rem;
    }
    .card-title {
        line-height: 2rem;
    }
    .services-image {
        min-width: 16rem;
        max-width: 16rem;
        min-height: 9rem;
        max-height: 9rem;
    }
    .services-flex {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .services-3d-card {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        min-width: 26.25rem;
        max-width: 26.25rem;
        min-height: 17.5rem;
        max-height: 17.5rem;
        padding: 2rem;
    }
    .view-more-flex {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        display: none;
    }
    .cards-flex {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .large-icon {
        min-width: 8rem;
        max-width: 8rem;
        min-height: 8rem;
        max-height: 8rem;
    }
    .show-on-tab {
        display: block;
    }
    .spline-tab-down {
        z-index: -1;
        opacity: 1;
        min-height: 53vh;
        max-height: 53vh;
        display: block;
        position: relative;
    }
    .arrow-image {
        display: none;
    }
    .about-title-block {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        justify-content: flex-start;
        align-items: center;
    }
    .about-title-flex {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        margin-left: auto;
        margin-right: auto;
    }
    .about-description {
        text-align: center;
        align-self: auto;
    }
    .about-cards-flex {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        flex-flow: wrap;
    }
    .spinner-image {
        width: 3.5rem;
        height: 3.5rem;
    }
    .card-gradient {
        min-height: 2rem;
        max-height: 2rem;
    }
    .about-card-image,
    .about-card-image-back,
    .about-card-image-front {
        min-height: 10.1rem;
        max-height: 10.1rem;
    }
    .hero-card-image,
    .hero-card-image-back,
    .hero-card-image-front {
        min-height: 4.5rem;
        max-height: 4.5rem;
    }
    .avatars-flex {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        width: 9rem;
        margin-left: 0;
    }
    .max-width-45rem {
        max-width: 44rem;
    }
    .timeline-block {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        border-width: .0625rem;
        grid-template-columns: 1fr 10rem 1fr;
        padding: 2rem;
    }
    .timeline-flex {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .timeline-left {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .timeline-right {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .teams-image {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        min-width: 17rem;
        max-width: 17rem;
    }
    .logo-icon {
        max-width: 8rem;
    }
    .teams-title-wrapper {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
    }
    .team-block {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        padding-top: 0;
    }
    .team-flex-01 {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        align-items: center;
    }
    .team-flex-03 {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        align-items: center;
        top: 0;
    }
    .team-grid {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        flex-flow: column;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr;
        justify-items: center;
        min-width: 100%;
        max-height: none;
        display: flex;
        top: 0;
    }
    .team-flex-02 {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        align-items: center;
        top: 0;
    }
    .services-description {
        text-align: center;
        max-width: 25rem;
    }
    .reviews-space-bottom {
        min-height: 4rem;
    }
    .reviews-space-top {
        min-height: 6rem;
    }
}

@media screen and (max-width: 767px) {
    h1 {
        font-size: 3.5rem;
        line-height: 4rem;
    }
    h2 {
        font-size: 3rem;
        line-height: 3.5rem;
    }
    h3 {
        font-size: 2.5rem;
        line-height: 3rem;
    }
    h4 {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    .logo-link-wrapper {
        padding-left: 0;
    }
    .utilities-wrapper-rich-text-and-buttons {
        max-width: 100%;
    }
    .utilities-wrapper-paragraph,
    .utilities-wrapper-title {
        width: 100%;
    }
    .utilities-flex-headings-and-paragraph {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-direction: column;
    }
    .rich-text {
        width: 100%;
    }
    .rich-text h4 {
        white-space: normal;
    }
    .image-wrapper {
        min-height: auto;
        max-height: none;
    }
    .works-details,
    .services-details {
        max-width: 26.25rem;
    }
    .works-grid-thirds {
        grid-column-gap: 1.7rem;
        grid-row-gap: 1.7rem;
        flex-flow: column;
        grid-template-columns: 1fr;
        display: flex;
    }
    .service-project-title {
        font-size: 3.5rem;
        line-height: 3.5rem;
    }
    .price-card {
        flex-flow: column;
        min-width: 70vw;
        max-width: 70vw;
        padding-left: 1rem;
    }
    .page-grid {
        grid-template-columns: 1fr;
    }
    .side-bar-left {
        position: static;
    }
    .brochure-card {
        max-width: 100%;
    }
    .thumbnails {
        aspect-ratio: 16 / 9;
    }
    .lightbox-link {
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .package-title {
        max-width: 30rem;
    }
    .cart-button {
        margin-left: 0;
    }
    .timeline-line {
        display: none;
    }
    .page-title-wrapper {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .page-title-block {
        text-align: center;
        align-items: center;
    }
    .reviews-slider-wrapper {
        width: 100%;
    }
    .reviews-arrow.left {
        bottom: 0;
    }
    .projects-title-grid {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        text-align: center;
        grid-template-columns: 1fr;
        align-items: center;
        display: flex;
    }
    .flex-title {
        align-items: center;
    }
    .works-description {
        max-width: 15rem;
    }
    .works-details-info {
        justify-content: center;
    }
    .large-title {
        font-size: 5.5rem;
        line-height: 4rem;
    }
    .about-title {
        font-size: 14vw;
        line-height: 11vw;
    }
    .works-details-block {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        text-align: center;
    }
    .footer-logo-link-wrapper {
        padding-left: 0;
    }
    .footer-right-flex {
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .footer-wrapper {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
    }
    .footer-footer-bottom {
        text-align: center;
        flex-direction: column;
        align-items: center;
    }
    .footer-top {
        grid-row-gap: 1.5rem;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
    }
    .footer-block {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .about-icon {
        min-width: 3rem;
        max-width: 3rem;
        min-height: 3rem;
        max-height: 3rem;
    }
    .form-wrapper {
        width: 100%;
        min-width: auto;
        max-width: none;
    }
    .hide-on-mobile {
        display: none;
    }
    .hero-icon {
        min-width: 2rem;
        max-width: 2rem;
        min-height: 2rem;
        max-height: 2rem;
    }
    .arrow-border-wrapper {
        border-width: 0;
        align-self: center;
    }
    .hero-text {
        font-size: 5.5rem;
        line-height: 4rem;
    }
    .spline {
        min-height: 37vh;
        max-height: 37vh;
    }
    .hero-wrapper {
        width: 28.5rem;
    }
    .works-image-wrapper {
        min-width: 26rem;
        max-width: 26rem;
        min-height: 14.63rem;
        max-height: 14.63rem;
    }
    .works-single-wrapper {
        min-width: 27rem;
        max-width: 27rem;
        min-height: 15.19rem;
        max-height: 15.19rem;
    }
    .about-block {
        align-items: center;
    }
    .metrics-wrapper {
        grid-row-gap: 2rem;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .reviews-slide {
        padding-bottom: 0;
    }
    .reviews-avatar {
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
    }
    .reviews-text {
        max-width: 100%;
        font-size: 3rem;
        line-height: 3.5rem;
    }
    .reviews-images {
        object-fit: contain;
        min-width: 5.5rem;
        max-width: 5.5rem;
    }
    .cta-block {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .cta-large {
        font-size: 5rem;
        line-height: 4.5rem;
    }
    .card-flex {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .skills-details-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        min-width: 100%;
        max-width: 100%;
        padding-top: 0;
    }
    .title-flex {
        justify-content: flex-start;
        align-items: center;
    }
    .large-card {
        min-width: 26.25rem;
        max-width: 26.25rem;
        min-height: 34.84rem;
        max-height: 34.84rem;
    }
    .card-title {
        font-size: 2.5rem;
        line-height: 2rem;
    }
    .services-3d-card {
        min-width: 26.25rem;
        max-width: 26.25rem;
        min-height: 17.59rem;
        max-height: 17.59rem;
    }
    .cards-flex {
        flex-flow: wrap;
    }
    .large-icon {
        min-width: 8rem;
        max-width: 8rem;
        min-height: 8rem;
        max-height: 8rem;
    }
    .spline-tab-down {
        min-height: 48vh;
        max-height: 48vh;
    }
    .about-title-block {
        align-items: center;
    }
    .about-cards-flex {
        flex-flow: wrap;
    }
    .about-card-image,
    .hero-card-image {
        top: 0;
    }
    .max-width-45rem {
        max-width: 25rem;
    }
    .timeline-block {
        grid-template-rows: auto auto;
        grid-template-columns: 4rem 1fr;
        padding: 1.5rem;
    }
    .timeline-flex {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        flex-flow: column;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
    }
    .timeline-left {
        z-index: 1;
        max-width: 100%;
        padding-right: 0;
        position: static;
    }
    .timeline-right {
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;
        align-items: center;
    }
    .logo-icon {
        max-width: 60px;
        display: none;
        top: 15px;
        right: 15px;
    }
    .team-block {
        align-items: center;
    }
    .team-flex-01,
    .team-flex-03 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .team-grid {
        max-height: none;
    }
    .team-flex-02 {
        flex-direction: column;
        align-items: center;
        left: 0;
    }
    .show-on-mobile {
        display: block;
    }
}

@media screen and (max-width: 479px) {
    h1 {
        font-size: 3rem;
        line-height: 3.5rem;
    }
    h2 {
        font-size: 12vw;
        line-height: 15vw;
    }
    h3 {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    h4 {
        font-size: 1.5rem;
        line-height: 2rem;
    }
    .navbar {
        padding-left: 5%;
        padding-right: 5%;
    }
    .nav-link {
        min-height: 4rem;
        font-size: 2.5rem;
        line-height: 3rem;
    }
    .nav-menu {
        z-index: 998;
    }
    .utilities-grid-thirds {
        grid-template-columns: 1fr 1fr;
    }
    .logo {
        z-index: 999;
        max-width: none;
        position: relative;
    }
    .text-align-right {
        text-align: center;
    }
    .text-block {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        align-items: center;
    }
    .flex-wrapper {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        text-align: center;
        justify-content: center;
    }
    .works-details,
    .services-details {
        max-width: 15rem;
    }
    .flex {
        align-items: center;
    }
    .works-grid-thirds {
        grid-column-gap: .7rem;
        grid-row-gap: .7rem;
    }
    .service-project-title {
        font-size: 2rem;
        line-height: 2rem;
    }
    .price-card {
        min-width: 90vw;
        max-width: 90vw;
    }
    .price-card-title {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    .product_total {
        font-size: 1.5rem;
    }
    .fix-scroll-wrapper {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        display: flex;
    }
    .side-bar-left {
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .package-button-wrapper {
        margin-left: auto;
        margin-right: auto;
    }
    .fix-scroll-container-products {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100%;
        display: flex;
    }
    .row-content {
        align-items: center;
    }
    .brochure-card {
        text-align: center;
        align-items: center;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }
    .services-page {
        max-width: 80%;
    }
    .package-text-wrapper {
        padding-left: 0;
        padding-right: 0;
    }
    .products-title {
        text-align: center;
    }
    .quantity {
        margin-left: auto;
        margin-right: auto;
    }
    .nav-container {
        padding-right: 0;
    }
    .title-wrapper {
        flex-direction: column;
    }
    .checkout {
        flex-flow: column;
    }
    .title-block {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
    .lightbox-link {
        margin-bottom: 1rem;
    }
    .package-title {
        max-width: 17.5rem;
        font-size: 2.625rem;
        line-height: 2.625rem;
    }
    .cart-button {
        z-index: 1001;
        margin-right: .25rem;
    }
    .cart-header {
        z-index: 1001;
        background-color: var(--black);
    }
    .cart-form-wrapper {
        z-index: 1001;
        background-color: var(--black);
        position: relative;
    }
    .cart {
        z-index: 1001;
    }
    .page-title-wrapper {
        text-align: center;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .page-title-flex {
        align-items: center;
    }
    .menu-button {
        padding-left: .5rem;
        padding-right: 0;
    }
    .burger-icon {
        z-index: 999;
        position: relative;
    }
    .slide {
        height: 100%;
    }
    .reviews-slider-wrapper {
        flex-direction: column;
        width: 100%;
    }
    .reviews-arrow.right {
        display: none;
    }
    .price-title-wrapper {
        flex-direction: column;
    }
    .price-title {
        overflow-wrap: normal;
        font-size: 2rem;
        line-height: 2rem;
    }
    .projects-title-grid {
        padding-left: 10%;
        padding-right: 10%;
    }
    .large-title {
        font-size: 2.25rem;
        line-height: 2rem;
    }
    .contact-block {
        justify-content: center;
        align-items: center;
    }
    .about-title {
        font-size: 16vw;
        line-height: 13vw;
    }
    .slide-nav {
        display: block;
        inset: auto 0% -4rem;
    }
    .reviews-avatar-flex {
        flex-flow: wrap;
    }
    .footer-flex {
        grid-row-gap: 0rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .footer-logo {
        z-index: 999;
        max-width: none;
        position: relative;
    }
    .socials-wrapper {
        top: 64%;
    }
    .socials-wrapper.hero {
        top: auto;
        bottom: 12%;
        right: -.5rem;
    }
    .about-icon {
        min-width: 3rem;
        max-width: 3rem;
        min-height: 3rem;
        max-height: 3rem;
    }
    .contact-card {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        text-align: center;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        min-height: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .order-item {
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
    }
    .line-item {
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .button-group {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding-left: .5rem;
    }
    .hero-icon {
        min-width: 2rem;
        max-width: 2rem;
        min-height: 2rem;
        max-height: 2rem;
    }
    .space-8rem {
        min-height: 4rem;
    }
    .space-4rem {
        min-height: 2rem;
    }
    .hero-text {
        font-size: 16vw;
        line-height: 13vw;
    }
    .hero-wrapper {
        width: 100%;
    }
    .hero-flex {
        flex-flow: column;
    }
    .works-image-wrapper {
        min-width: 90%;
        max-width: 90%;
        min-height: 50vw;
        max-height: 50vw;
    }
    .works-single-wrapper {
        min-width: 15rem;
        max-width: 15rem;
        min-height: 8.44rem;
        max-height: 8.44rem;
    }
    .brands-wrapper {
        text-align: center;
    }
    .brands-grid {
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    .logos-wrapper {
        min-width: 30vw;
        max-width: 30vw;
    }
    .about-block {
        text-align: center;
    }
    .services-card-text {
        width: 90%;
    }
    .metrics-wrapper {
        flex-flow: column;
        grid-template-columns: 1fr;
        justify-content: center;
    }
    .metrics-text-block {
        min-height: auto;
        max-height: none;
    }
    .vision-text {
        text-align: center;
    }
    .reviews-slide {
        justify-content: space-around;
    }
    .reviews-avatar {
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
    }
    .reviews-text {
        max-width: 100%;
        font-size: 1.8rem;
        line-height: 2.3rem;
    }
    .reviews-images {
        object-fit: contain;
        min-width: 3rem;
        max-width: 3rem;
        min-height: 2.5rem;
        max-height: 2.5rem;
        top: -.7rem;
    }
    .title {
        font-size: 56px;
        line-height: 42px;
    }
    .cta-block {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr;
    }
    .cta-large {
        font-size: 16vw;
        line-height: 16vw;
    }
    .card.large-card {
        left: -4%;
    }
    .card.services-3d-card {
        min-height: auto;
        max-height: none;
        padding-top: 1rem;
        padding-bottom: 1rem;
        left: -4%;
    }
    .card-flex {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        text-align: center;
        align-items: center;
        padding-bottom: 1rem;
    }
    .skills-details-wrapper {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        padding-bottom: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .skills-content-wrapper {
        min-width: 210px;
        max-width: 210px;
    }
    .large-card {
        min-width: 15rem;
        max-width: 15rem;
        min-height: 19.91rem;
        max-height: 19.91rem;
    }
    .card-title {
        font-size: 2.5rem;
        line-height: 2rem;
    }
    .services-image {
        min-width: 100%;
        max-width: 100%;
        min-height: 7rem;
        max-height: 7rem;
    }
    .services-3d-card {
        min-width: 100%;
        max-width: 100%;
        min-height: 11.25rem;
        max-height: 11.25rem;
    }
    .cards-flex {
        flex-flow: column;
    }
    .large-icon {
        max-height: 40vw;
    }
    .spline-tab-down {
        min-height: 27vh;
        max-height: 27vh;
    }
    .about-title-block {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
    .about-title-flex {
        align-items: center;
    }
    .about-cards-flex {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-flow: column;
    }
    .max-width-45rem {
        max-width: 100%;
    }
    .timeline-block {
        text-align: center;
        grid-template-columns: 3rem 1fr;
        align-items: center;
    }
    .timeline-left {
        text-align: center;
        justify-content: flex-start;
        align-items: center;
    }
    .timeline-right {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
    .teams-image {
        min-width: 80vw;
        max-width: 80vw;
    }
    .team-wrapper {
        align-items: center;
        max-width: 100%;
    }
    .services-description {
        max-width: 15rem;
    }
    .reviews-space-bottom {
        min-height: 7rem;
    }
    .reviews-space-top {
        min-height: 4rem;
    }
}

#w-node-_5d110268-179e-1371-ecd7-5eaf057a191e-6aea69ce,
#w-node-_5d110268-179e-1371-ecd7-5eaf057a1928-6aea69ce,
#w-node-_20fd9834-53e4-49d8-a0b2-55fef6b63a48-6aea69d1,
#w-node-_20fd9834-53e4-49d8-a0b2-55fef6b63a4b-6aea69d1,
#w-node-_20fd9834-53e4-49d8-a0b2-55fef6b63a4c-6aea69d1,
#w-node-_20fd9834-53e4-49d8-a0b2-55fef6b63a4f-6aea69d1,
#w-node-_20fd9834-53e4-49d8-a0b2-55fef6b63a50-6aea69d1,
#w-node-_20fd9834-53e4-49d8-a0b2-55fef6b63a53-6aea69d1 {
    grid-area: span 1 / span 1 / span 1 / span 1;
}

@media screen and (max-width: 479px) {
    #w-node-_5d110268-179e-1371-ecd7-5eaf057a191e-6aea69ce {
        justify-self: center;
    }
}
```

`src/utils/animations.js`:

```js
/**
 * Animations module - Handles all scroll-triggered and entrance animations
 * Mirrors Webflow's animation behavior
 */

export function initializeAnimations() {
  // Set up Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation classes based on data attributes
        const element = entry.target
        
        if (element.hasAttribute('data-w-id')) {
          element.classList.add('animate-in')
          
          // Apply fade-in animation
          if (!element.classList.contains('animated')) {
            element.style.opacity = '0'
            element.style.transform = 'translateY(30px)'
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            
            // Trigger animation
            setTimeout(() => {
              element.style.opacity = '1'
              element.style.transform = 'translateY(0)'
            }, 50)
            
            element.classList.add('animated')
          }
        }
        
        // Stop observing after animation
        animationObserver.unobserve(element)
      }
    })
  }, observerOptions)

  // Observe all elements with animation data attributes
  const animatedElements = document.querySelectorAll('[data-w-id]')
  animatedElements.forEach(element => {
    animationObserver.observe(element)
  })

  // Hero elements stagger animation
  const heroElements = document.querySelectorAll('.hero-text, .hero-subheading-flex, .hero-flex, .max-width-25vw')
  heroElements.forEach((element, index) => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.animation = `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.2}s forwards`
  })

  // Metrics cards animation
  const metricsBlocks = document.querySelectorAll('.metrics-text-block')
  metricsBlocks.forEach((block, index) => {
    block.style.opacity = '0'
    block.style.animation = `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.3}s forwards`
  })

  // Works items animation
  const workItems = document.querySelectorAll('.works-wrapper')
  workItems.forEach((item, index) => {
    item.style.opacity = '0'
    item.style.animation = `fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.4}s forwards`
  })

  // Avatar stagger animation
  const avatars = document.querySelectorAll('.avatar-a, .avatar-b, .avatar-c')
  avatars.forEach((avatar, index) => {
    avatar.style.opacity = '0'
    avatar.style.animation = `popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1 + 0.8}s forwards`
  })

  // Social icons animation
  const socialIcons = document.querySelectorAll('.social-icon')
  socialIcons.forEach((icon, index) => {
    icon.style.opacity = '0'
    icon.style.animation = `slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.9}s forwards`
  })
}

export function addHoverAnimations() {
  // Hover effect for buttons and links
  const buttons = document.querySelectorAll('.button-with-circle-icon, .works-link-wrapper, a[href*="/"]')
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)'
      this.style.transition = 'transform 0.3s ease-out'
    })
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)'
    })
  })

  // Parallax hover for hero cards
  const heroCards = document.querySelectorAll('.hero-card')
  heroCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const rotateX = (y - rect.height / 2) / 10
      const rotateY = (x - rect.width / 2) / 10
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      this.style.transition = 'transform 0.1s ease-out'
    })
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
      this.style.transition = 'transform 0.3s ease-out'
    })
  })

  // Image hover effects
  const images = document.querySelectorAll('.works-image, .hero-card-image-front')
  images.forEach(image => {
    image.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.08)'
      this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    })
    
    image.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)'
    })
  })
}

export function initScrollAnimations() {
  // Scroll-triggered element reveals
  let lastScrollPos = 0

  const handleScroll = () => {
    const scrollPos = window.scrollY
    const direction = scrollPos > lastScrollPos ? 'down' : 'up'
    lastScrollPos = scrollPos

    // Navbar animation on scroll
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      if (scrollPos > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
        navbar.style.backdropFilter = 'blur(10px)'
      } else {
        navbar.style.boxShadow = 'none'
        navbar.style.backdropFilter = 'none'
      }
    }

    // Parallax effect for large titles
    const largeTitles = document.querySelectorAll('.large-title')
    largeTitles.forEach(title => {
      const rect = title.getBoundingClientRect()
      const offset = (window.innerHeight - rect.top) * 0.1
      title.style.transform = `translateY(${offset}px)`
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}

export function setupPageTransitions() {
  // Add smooth transitions between elements
  const navLinks = document.querySelectorAll('a[href^="/"]')
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href')
      
      // Prevent default for demo, but show animation
      if (href.startsWith('/')) {
        // You can replace this with actual routing in a real app
        console.log('Navigating to:', href)
        
        // Add fade-out animation before navigation
        document.body.style.opacity = '1'
        document.body.style.transition = 'opacity 0.3s ease-out'
        document.body.style.opacity = '0'
      }
    })
  })
}

```

`vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Mechgust-2026/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    middlewareMode: false
  },
  ssr: {
    external: []
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
}))

```