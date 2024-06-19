import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RovHeroModule } from './rov-hero/rov-hero.module';
import { RovItemModule } from './rov-item/rov-item.module';
import { RovRuneModule } from './rov-rune/rov-rune.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RovSeasonModule } from './rov-season/rov-season.module';
import { RovGloriousModule } from './rov-glorious/rov-glorious.module';
import { RovRankModule } from './rov-rank/rov-rank.module';
import { RovSpellModule } from './rov-spell/rov-spell.module';
import { RovMedModule } from './rov-med/rov-med.module';
import { RovArrangeModule } from './rov-arrange/rov-arrange.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RovCatagorieModule } from './rov-catagorie/rov-catagorie.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb://root:example@localhost:27017/rovpro?authSource=admin"),
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal: true,
    }),RovHeroModule, RovItemModule, RovRuneModule, UserModule, PostModule, RovSeasonModule, RovGloriousModule, RovRankModule, RovSpellModule, RovMedModule, RovArrangeModule, RovCatagorieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
