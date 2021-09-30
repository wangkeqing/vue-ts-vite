/*
 * @Author: your name
 * @Date: 2021-09-29 17:55:37
 * @LastEditTime: 2021-09-30 15:27:29
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\store\modules\auth\mutations.ts
 */
import { MutationTree } from 'vuex'
import { UserState } from './state'
import { UserMutationTypes } from './mutation-types'

export type Mutations<S = UserState> = {
    [UserMutationTypes.SET_TOKEN](state: S, token: string): void
    [UserMutationTypes.SET_NAME](state: S, name: string): void
    [UserMutationTypes.SET_INTRODUCTION](state: S, introduction: string): void
    [UserMutationTypes.SET_ROLES](state: S, roles: string[]): void
}

export const mutations: MutationTree<UserState> & Mutations = {
    [UserMutationTypes.SET_TOKEN](state: UserState, token: string) {
        state.token = token
    },

    [UserMutationTypes.SET_NAME](state: UserState, name: string) {
        state.name = name
    },

    [UserMutationTypes.SET_INTRODUCTION](state: UserState, introduction: string) {
        state.introduction = introduction
    },

    [UserMutationTypes.SET_ROLES](state: UserState, roles: string[]) {
        state.roles = roles
    }

}