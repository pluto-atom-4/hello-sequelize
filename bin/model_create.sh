#!/usr/bin/env bash
npx sequelize model:create --name employee --underscored \
  --attributes name:string,gender:enum:'{male,female,other}',birth:date,joined_date:date

npx sequelize model:create --name User --underscored \
  --attributes firstName:string,lastName:string,email:string
