import { useRouter } from 'next/router';

export const pathIndex = (pathList) => {
  let path = useRouter();
  let pathIndex = null;
  if (path.query.slug) {
    pathIndex = pathList.findIndex((e) => e.slug === path.query.slug);
  } else {
    let pathRoute = path.asPath.split('/').pop();
    pathIndex = pathList.findIndex((e) => e.path === pathRoute);
  }

  let prevPath = pathList[pathIndex - 1] || [];
  let nextPath = pathList[pathIndex + 1] || [];

  //verify prevPath and nextPath are not href (external links)
  if (prevPath.href) {
    prevPath = pathList[pathIndex - 2] || [];
  }
  if (nextPath.href) {
    nextPath = pathList[pathIndex + 2] || [];
  }
  return {
    prevPath,
    nextPath,
  };
};
