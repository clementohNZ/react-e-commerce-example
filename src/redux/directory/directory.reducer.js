import sectionData from '../../components/directory/sections.data'

const INITIAL_STATE = {
  sections: sectionData,
}

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
