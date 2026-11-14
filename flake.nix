{
  description = "My personal website";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { nixpkgs, ... }: {
    devShells = builtins.mapAttrs (system: pkgs: {
      default = import ./shell.nix pkgs;
    }) nixpkgs.legacyPackages;
  };
}
