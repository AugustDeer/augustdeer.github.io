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
    hash = "sha256-lVZw5g4ilgEoMLBbUKIYhyct2s4d697Y6XX/Lgj31Ng=";
  };

  installPhase = ''
    runHook preInstall

    cp -r ./dist/ $out/

    runHook postInstall
  '';

  meta = defaultMeta;
})
