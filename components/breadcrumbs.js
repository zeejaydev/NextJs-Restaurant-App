import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

/*
interface BreadCrumb {
  route: string;
  label: string;
  link: string;
}
*/



export default function BreadCrumbs({catName,itemDetail}) {

    const Route2LabelMap = {
        "/": "Home",
        "/order/categories/detail/[name]": `${itemDetail}`,
        "/order": "Categories",
        "/order/categories/[cat]": `${catName}`,
        "/order/categories": "order/cat",
        "/order/categories/detail": " ",
      };
  const router = useRouter();

  const [crumbs, setCrumbs] = React.useState([]);

  React.useEffect(() => {
    const segmentsPath = router.asPath.split("/");
    const segmentsRoute = router.route.split("/");
    const crumbLinks = CombineAccumulatively(segmentsPath);
    const crumbLabels = CombineAccumulatively(segmentsRoute);

    const crumbs = crumbLinks.map((link, index) => {
      const route = crumbLabels[index];
      const crumb = {
        link: link,
        route: route,
        label: Route2LabelMap[route] || route,
      };
      return crumb;
    });
    setCrumbs(crumbs);

    // console.log({
    //   router,
    //   segmentsPath,
    //   segmentsRoute,
    //   crumbLinks,
    //   crumbLabels,
    //   crumbs,
    // });
  }, [router.route]);

  return (
    <div className="w-full flex">
      {crumbs.map((c, i) => {
        return (
          <div key={i}>
            {
               c.label === "order/cat" ? null : 
               <div className="flex items-center" >
                  {(i > 0) ? <div className="text-lime-700 font-bold">{'>'}</div> : null}
                  <div className={(i == (crumbs.length - 1) ? 'text-black' : 'text-lime-700  underline underline-offset-4') + " px-2 py-1 capitalize font-bold"}>
                    {c.route === "/order/gategories" ||  c.route === "/order/categories/detail" ? 
                      <button onClick={()=>router.back()} className='font-bold underline underline-offset-4 capitalize'>{catName}</button>
                      :null
                    }
                     <Link href={`${c.label==="Home"?'/':'/order'}`}><a className="capitalize">{c.label}</a></Link>
                  </div>
              </div>

             }
          </div>
        );
      })}
    </div>
  );
}

function CombineAccumulatively(segments) {
  /* 
  when segments = ['1','2','3']
  returns ['1','1/2','1/2/3']
  */
  const links = segments.reduce((acc, cur, curIndex) => {
    const last = curIndex > 1 ? acc[curIndex - 1] : "";
    const newPath = last + "/" + cur;
    acc.push(newPath);
    return acc;
  }, []);
  return links;
}