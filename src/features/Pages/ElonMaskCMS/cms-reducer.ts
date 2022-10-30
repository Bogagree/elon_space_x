const cmsInitialState = {
    marketPosition: '1',
    guaranty: '50',
    year: '2001',
    travellingDuration: '567'

}

export const cmsReducer = (state: InitialStateType = cmsInitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CMS/SET-DATA':
            console.log('payload', action.payload)
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

type InitialStateType = typeof cmsInitialState

export const setCmsData = (data: CmsDataType) => ({type: 'CMS/SET-DATA', payload: data} as const)

export type SetCmsDataType = ReturnType<typeof setCmsData>

type ActionsType = SetCmsDataType

export type CmsDataType = {
    marketPosition: string
    guaranty: string
    year: string
    travellingDuration: string
}