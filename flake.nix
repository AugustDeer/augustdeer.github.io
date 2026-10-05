{
  description = "My personal website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = {self, nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
    pnpm = pkgs.pnpm_12;
  in {
    devShells.${system}.default = pkgs.mkShellNoCC {
      inputsFrom = [self.packages.default];
    };

    packages.${system}.default = pkgs.stdenvNoCC.mkDerivation (finalAttrs: {
      pname = "webdev-test";
      version = "0.0.0";

      src = ./.;

      nativeBuildInputs = with pkgs; [
        nodejs
        pnpmConfigHook
        pnpmBuildHook
        pnpm
      ];

      pnpmDeps = pkgs.fetchPnpmDeps {
        inherit (finalAttrs) pname version src;
        inherit pnpm;
        fetcherVersion = 4;
        hash = "sha256-yY8Fo5QzkgoiZrI3PtcGJ1A6gab6zlIlQfh+wI56/G4=";
      };

      installPhase = ''
        runHook preInstall

	cp -r ./dist/ $out/

	runHook postInstall
      '';
    });

    formatter.${system} = pkgs.alejandra;
  };
}
