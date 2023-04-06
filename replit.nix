{ pkgs }: {
    deps = [
        pkgs.nano
        pkgs.lsof
        pkgs.python39Full
        pkgs.pypy3
        pkgs.sudo
        pkgs.yarn
        pkgs.esbuild
        pkgs.nodejs
        pkgs.chromium
        pkgs.nodePackages.typescript
        pkgs.nodePackages.typescript-language-server
    ];
}