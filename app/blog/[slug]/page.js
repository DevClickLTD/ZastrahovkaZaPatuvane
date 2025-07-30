import Link from "next/link";
import { getPostBySlug } from "../../../services/posts";
import { getServicesNav } from "../../../services/services";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.length === 0) {
    throw new Error("Post not found");
  }

  const meta = post[0].yoast_head_json;
  const ogImage =
    meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "застраховка за пътуване",
      "пътнически съвети",
      "здравна застраховка чужбина",
      "съвети за пътуване",
      "застрахователни новини",
      slug.replace(/-/g, " ")
    ],
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    alternates: {
      canonical: meta.canonical,
    },
  };
}

export default async function PostPage({ params }) {
  try {
    const { slug } = await params;
    const [post, services] = await Promise.all([
      getPostBySlug(slug),
      getServicesNav()
    ]);

    if (!post || post.length === 0) {
      throw new Error("Post not found");
    }

    const meta = post[0].yoast_head_json;
    const ogImage =
      meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

    return (
      <>
        <div className="bg-white">
          <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-23 text-center shadow-2xl sm:px-23">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {post[0].title.rendered}
                </h1>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute -top-50 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#4E6688" />
                    <stop offset={1} stopColor="#4E6688" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Blog Post Content - 66% (2 columns out of 3) */}
              <div className="lg:col-span-2">
                <article className="mx-auto max-w-8xl w-full">
                  {ogImage && (
                    <img
                      src={ogImage}
                      alt={meta.og_title}
                      className="w-full h-auto mb-8 rounded-xl shadow-lg"
                    />
                  )}
                  <time
                    dateTime={new Date(post[0].date).toISOString()}
                    className="block mt-2 text-sm text-gray-500"
                  >
                    {new Date(post[0].date).toLocaleDateString()}
                  </time>
                  <div
                    className="wordpress-content prose max-w-none leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
                  />
                </article>
              </div>
              
              {/* Services Sidebar - 33% (1 column out of 3) */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Нашите услуги
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    Разгледайте пълната гама от застрахователни услуги, които предлагаме за вашето спокойствие.
                  </p>
                  
                  <div className="space-y-3">
                    {services && services.length > 0 ? (
                      services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="group block p-3 rounded-md bg-white border border-gray-100 hover:border-[#4E6688] hover:shadow-sm transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#4E6688] transition-colors">
                              {service.title.rendered}
                            </h4>
                            <svg
                              className="w-4 h-4 text-gray-400 group-hover:text-[#4E6688] transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">
                        В момента няма налични услуги.
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/services"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#4E6688] hover:bg-gray-700 transition-colors duration-200"
                    >
                      Вижте всички услуги
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return <p>Error: {error.message}</p>;
  }
}
