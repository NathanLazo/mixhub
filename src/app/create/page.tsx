import { ContactSection } from "~/components/home/ContactSection";

import { PageIntro } from "~/components/home/PageIntro";

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
                  <Label htmlFor='artist'>Artist name</Label>
                  <Input
                    id='artist'
                    type='title'
                    placeholder='Name of your artist'
                  />
                  <Label htmlFor='genre'>Genre</Label>
                  <Input id='genre' placeholder='Genre' />
                  <Label htmlFor='description'>Description</Label>
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
