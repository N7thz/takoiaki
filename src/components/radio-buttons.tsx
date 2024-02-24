import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioButtons() {

    return (

        <RadioGroup
            defaultValue="crédito"
            className="flex capitalize"
        >
            <div
                className="flex items-center space-x-2"
            >
                <RadioGroupItem
                    value="débito"
                    id="r1"
                />
                <Label htmlFor="r1">
                    débito
                </Label>
            </div>

            <div
                className="flex items-center space-x-2"
            >
                <RadioGroupItem
                    value="crédito"
                    id="r2"
                />
                <Label htmlFor="r2">
                    crédito
                </Label>
            </div>
            
            <div
                className="flex items-center space-x-2"
            >
                <RadioGroupItem
                    value="pix"
                    id="r3"
                />
                <Label htmlFor="r3">
                    pix
                </Label>
            </div>
        </RadioGroup>
    )
}
