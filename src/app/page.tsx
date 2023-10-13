import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "~/components/home/ContactSection";
import { Container } from "~/components/home/Container";
import { FadeIn, FadeInStagger } from "~/components/home/FadeIn";
import { List, ListItem } from "~/components/home/List";
import { SectionIntro } from "~/components/home/SectionIntro";
import { StylizedImage } from "~/components/home/StylizedImage";
import { Testimonial } from "~/components/home/Testimonial";
import logoBrightPath from "~/images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "~/images/clients/family-fund/logo-light.svg";
import logoGreenLife from "~/images/clients/green-life/logo-light.svg";
import logoHomeWork from "~/images/clients/home-work/logo-light.svg";
import logoMailSmirk from "~/images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "~/images/clients/north-adventures/logo-light.svg";
import logoPhobiaDark from "~/images/clients/phobia/logo-dark.svg";
import logoPhobiaLight from "~/images/clients/phobia/logo-light.svg";
import logoUnseal from "~/images/clients/unseal/logo-light.svg";
import imageAudio from "~/images/audio.jpg";

import { Button } from "~/components/ui/button";

const clients = [
  ["Phobia", logoPhobiaLight],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

function Clients() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <Container>
        <h2 className='text-center flex justify-center items-center font-display text-lg font-bold tracking-wider text-white sm:text-left'>
          Install our app and start listening to your favorite music!
        </h2>
      </Container>
      <div className='flex justify-center items-center'>
        <Button
          asChild
          className='mt-6 rounded-full bg-white text-black hover:bg-zinc-300 '
        >
          <Link href='https://www.xnft.gg/app/6ogcRWAffccJEhEVHyXAfrbGZyCtFuMRSps6rEX6xaJZ'>
            Install mixhub!
          </Link>
        </Button>
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow='Advantages'
        title='Your Gateway to Exclusive Music'
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>
          Elevate artists earnings, offer musical exclusivity, build a vibrant
          music community, and access effortlessly with Mixhub – Your gateway to
          exclusive tunes!
        </p>
      </SectionIntro>
      <Container className='mt-16'>
        <div className='lg:flex lg:items-center lg:justify-end'>
          <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
            <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
              <StylizedImage
                src={imageAudio}
                sizes='(min-width: 1024px) 41rem, 31rem'
                className='justify-center lg:justify-end'
              />
            </FadeIn>
          </div>
          <List className='mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
            <ListItem title='Boosts Artist Revenues'>
              Mixhub allows artists to earn royalties with each NFT sold,
              increasing their income and supporting their musical careers.
            </ListItem>
            <ListItem title='Musical Exclusivity'>
              Provides a platform where musicians can offer their music
              exclusively to a select group of fans, enhancing visibility and
              demand.
            </ListItem>
            <ListItem title='Fosters Music Community'>
              Helps build a strong community around music, connecting artists
              with their audience and encouraging interaction.
            </ListItem>
            <ListItem title='Ease of Use'>
              Mixhub is presented as a Progressive Web App (PWA), enabling users
              to access the platform effortlessly from any internet-connected
              device, without the need for additional downloads.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  description:
    "mixhub! is a web3 marketplace where people can enjoy their music in a whole new experience.",
};

export default async function Home() {
  return (
    <>
      <Container className='mt-24 sm:mt-32 md:mt-56'>
        <FadeIn className='max-w-3xl'>
          <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
            A new experience to taste the music
          </h1>
          <p className='mt-6 text-xl text-neutral-600'>
            We are a web3 marketplace where people can enjoy their music in a
            whole new experience.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Testimonial
        className='mt-24 sm:mt-32 lg:mt-40'
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  );
}
