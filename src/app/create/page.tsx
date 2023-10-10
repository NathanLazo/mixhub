import { type Metadata } from "next";
import Image from "next/image";

import { Border } from "~/components/home/Border";
import { ContactSection } from "~/components/home/ContactSection";
import { Container } from "~/components/home/Container";
import { FadeIn, FadeInStagger } from "~/components/home/FadeIn";
import { GridList, GridListItem } from "~/components/home/GridList";
import { PageIntro } from "~/components/home/PageIntro";
import { PageLinks } from "~/components/home/PageLinks";
import { SectionIntro } from "~/components/home/SectionIntro";
import { StatList, StatListItem } from "~/components/home/StatList";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import clsx from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default async function Create() {
  return (
    <>
      <div className='flex justify-center items-center text-sm'>
        <PageIntro eyebrow='Your NFTs' title='Upload your song!'>
          <p></p>
        </PageIntro>
      </div>

      <div className='lg:justify-center flex-col h-fit lg:mx-40 w-auto mx-10 lg:w-auto lg:flex lg:flex-col justify-start mt-6'>
        <Card>
          <CardHeader>
            <CardTitle>Upload your new NFT</CardTitle>
            <CardDescription>
              If you dont have an album yet, you can create one here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4 py-2'>
                <div className='flex flex-col space-y-4'>
                  <Label htmlFor='title'>Song title</Label>
                  <Input id='title' placeholder='Name of your song' />
                  <Label htmlFor='name'>Artist name</Label>
                  <Input id='artist' placeholder='Name of your artist' />
                  <Label htmlFor='name'>Genre</Label>
                  <Input id='genre' placeholder='Genre' />
                  <Label htmlFor='name'>Description</Label>
                  <Input id='description' placeholder='Description' />
                  <Label htmlFor='file'>Song audio</Label>
                  <Input
                    id='audio'
                    type='file'
                    accept='audio/*'
                    placeholder='Audio'
                  />
                  <Label htmlFor='file'>Song cover</Label>
                  <Input
                    id='cover'
                    type='file'
                    accept='image/*'
                    placeholder='Cover'
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button className=''>Mint!</Button>
          </CardFooter>
        </Card>
      </div>

      <ContactSection />
    </>
  );
}
