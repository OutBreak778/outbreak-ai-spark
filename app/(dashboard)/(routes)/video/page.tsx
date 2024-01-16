"use client";

import * as z from "zod";
import Heading from "@/components/Heading";
import { MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios"
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

const VideoPage = () => {

  const router = useRouter()
  const [video, setVideo] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

      setVideo(undefined)
      const res = await axios.post("/api/video", values)

      setVideo(res.data[0])
      form.reset()

    } catch (error) {
      console.log(error)
    } finally {
      router.refresh()
    }
  };

  return (
    <div>
      <Heading
        title="Video Generation"
        description="Turn your prompt into Video"
        icon={VideoIcon}
        iconColor="text-orange-500"
        bgColor="bg-orange-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="Fish swimming in noodles" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-md bg-muted w-full flex items-center justify-center"><Loader /></div>
          )}
          {!video && !isLoading && (
            <Empty label="No Video Created! Start creating Video with This" />
          )}
          {video &&(
            <audio controls className="w-full mt-8">
              <source src={video} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
