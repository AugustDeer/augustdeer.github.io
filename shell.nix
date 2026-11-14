pkgs:
pkgs.mkShellNoCC {
  packages = with pkgs; [
    nodejs_24
    pnpm_12

    nixfmt
  ];
}
