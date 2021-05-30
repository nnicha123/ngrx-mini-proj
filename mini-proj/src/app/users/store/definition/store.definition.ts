import {EntityState,EntityAdapter,createEntityAdapter} from '@ngrx/entity';
import { User } from "../../definitions/user.definition";

export interface ModuleEntity{
  userId:string;
  data:User;
}

export interface ModuleEntityState extends EntityState<ModuleEntity>{
  selectUserId:string|null;
}

const selectUserId = (entity:ModuleEntity):string => {
  return entity.userId;
}

export const moduleEntityAdapter:EntityAdapter<ModuleEntity> = createEntityAdapter<ModuleEntity>({
  selectId:selectUserId
})