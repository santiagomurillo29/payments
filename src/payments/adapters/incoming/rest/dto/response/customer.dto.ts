import { ApiProperty } from "@nestjs/swagger";

export class CustomerResponse {
    @ApiProperty() id: string;
    @ApiProperty() name: string;
    @ApiProperty() email: string;
    @ApiProperty() address: string;
    @ApiProperty() city: string;
}