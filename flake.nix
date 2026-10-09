{
  description = "My personal website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flakelight = {
      url = "github:nix-community/flakelight";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    { flakelight, ... }:
    flakelight ./. {
      devShell.packages =
        pkgs: with pkgs; [
          nodejs
          pnpm
        ];
    };
}
