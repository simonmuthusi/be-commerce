import { Module } from '@nestjs/common';
import { ReportsService } from './services/reports.service';

@Module({
  providers: [ReportsService]
})
export class ReportsModule {}
