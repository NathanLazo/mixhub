import Image, { type ImageProps } from "next/image";
import clsx from "clsx";

import { Container } from "~/components/home/Container";
import { GridPattern } from "~/components/home/GridPattern";
import { Border } from "~/components/home/Border";
import { FadeIn, FadeInStagger } from "~/components/home/FadeIn";
import imageLeslieAlexander from "~/images/team/leslie-alexander.jpg";
import imageMichaelFoster from "~/images/team/michael-foster.jpg";
import imageDriesVincent from "~/images/team/dries-vincent.jpg";
import imageJorgeMontanez from "~/images/team/jorge-montanez.jpg";
import imageJaredGarcia from "~/images/team/jared-garcia.jpg";
import imageEmilioMarquez from "~/images/team/emilio-marquez.jpg";

const team = [
  {
    title: "Team",
    people: [
      {
        name: "Jorge Montañez",
        role: "Founder / CEO",
        image: { src: imageJorgeMontanez },
      },
      {
        name: "Jared Alcalá",
        role: "Product Manager / Lead Developer",
        image: { src: imageJaredGarcia },
      },
      {
        name: "Emilio Marquez",
        role: "QA / Developer",
        image: { src: imageEmilioMarquez },
      },
    ],
  },
];
export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode;
  client: { logo: ImageProps["src"]; name: string };
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className='absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]'
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          {/* <figure className='mx-auto max-w-4xl'>
            <blockquote className='relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <Image src={client.logo} alt={client.name} unoptimized />
            </figcaption>
          </figure> */}
          <div className='space-y-24'>
            {team.map((group) => (
              <FadeInStagger key={group.title}>
                <FadeIn>
                  <h2 className='flex justify-center items-center font-display text-2xl font-semibold text-neutral-950'>
                    {group.title}
                  </h2>
                </FadeIn>
                <div className='grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-2 xl:gap-8'>
                  <div className='lg:col-span-3'>
                    <ul
                      role='list'
                      className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'
                    >
                      {group.people.map((person) => (
                        <li key={person.name}>
                          <FadeIn>
                            <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
                              <Image
                                alt=''
                                {...person.image}
                                className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'
                              />
                              <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                                <p className='font-display text-base/6 font-semibold tracking-wide text-white'>
                                  {person.name}
                                </p>
                                <p className='mt-2 text-sm text-white'>
                                  {person.role}
                                </p>
                              </div>
                            </div>
                          </FadeIn>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInStagger>
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
