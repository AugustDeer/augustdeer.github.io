{
  nodejs,
  pnpm,
  stdenvNoCC,
  pnpmConfigHook,
  pnpmBuildHook,
  fetchPnpmDeps,
  src,
  defaultMeta,
}:
stdenvNoCC.mkDerivation (finalAttrs: {
  inherit src;

  pname = "webdev-test";
  version = "0.0.0";

  nativeBuildInputs = [
    nodejs
    pnpmConfigHook
    pnpmBuildHook
    pnpm
  ];

  pnpmDeps = fetchPnpmDeps {
    inherit (finalAttrs) pname version src;
    fetcherVersion = 4;
    hash = "sha256-yY8Fo5QzkgoiZrI3PtcGJ1A6gab6zlIlQfh+wI56/G4=";
  };

  installPhase = ''
    runHook preInstall

    cp -r ./dist/ $out/

    runHook postInstall
  '';

  meta = defaultMeta;
})
