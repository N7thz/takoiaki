import { ButtonsLogin } from "@/components/button-login"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {

  return (

    <div
      className="min-h-screen flex justify-center items-center backgroundImage"
    >
      <Card
        className="bg-zinc-100/95 border border-indigo-400 text-black p-2 w-[400px]"
      >
        <CardHeader>
          <CardTitle
            className="text-3xl italic"
          >
            Login
          </CardTitle>
        </CardHeader>
        <CardContent
          className="flex flex-col gap-4"
        >

          <div
            className="flex flex-col gap-1"
          >
            <Label
              className="text-lg p-1"
              htmlFor="email"
            >
              email:
            </Label>
            <Input
              className="bg-zinc-100 border-indigo-400"
              id="email"
            />
          </div>

          <div
            className="flex flex-col gap-1"
          >
            <Label
              className="text-lg p-1"
              htmlFor="password"
            >
              passoword:
            </Label>
            <Input
              className="bg-zinc-100 border-indigo-400"
              id="password"
            />
          </div>

          <div
            className="flex justify-center items-center gap-2 px-4"
          >
            <Separator
              className="w-1/2"
            />
            or
            <Separator
              className="w-1/2"
            />
          </div>
          <ButtonsLogin />

        </CardContent>

        <CardFooter
          className="flex justify-end"
        >
          <Button className="bg-indigo-400">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
