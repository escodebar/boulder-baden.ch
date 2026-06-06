type NavigationMetaKey = "navigation" | "legal" | "footer";

export function useNavigation(type: NavigationMetaKey) {
  const router = useRouter();

  return router
    .getRoutes()
    .filter((route) => route.meta[type])
    .sort((a, b) => (a.meta.order ?? 0) - (b.meta.order ?? 0))
    .map(({ meta, name, path }) => ({
      label: meta.title as string,
      name,
      path,
    }));
}
