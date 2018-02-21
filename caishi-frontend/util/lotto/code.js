// import 'operative'

export const getFirstNum = identifier => {
  let index = identifier.match(/\d/).index
  return identifier.slice(index,index + 1)
}

const filterSelected = (selected,isDouble) => selected.map((value,index) => value && (isDouble ? (`${index + 1}`) : index)).filter(_ => _ || _ === 0)

export const select2Code = (selected,isDouble) => Array.isArray(selected) ? filterSelected(selected,isDouble) : Object.values(selected).map((selected) => filterSelected(selected,isDouble)).filter(_ => _.length)
//lodash uniq uniqBy slow!
//https://stackoverflow.com/questions/1890203/unique-for-arrays-in-javascript
export const textFilter = (value, length, isDouble) => {

  return value ? [...new Set(value.split(isDouble ? /[，,;；]/g : /[，,;；\s]/g).filter(_ => {

    if (isDouble) {
      const array = _.split(/\s/g)
      if (array.some(num => num > isDouble || Number.isNaN(+num))) {
        return false
      }
      if ([...new Set(array)].length !== array.length) {
        return false
      } 
    } else if (Number.isNaN(+_)) {
      return false
    }

    return !_.includes('.') && _.trim().length == length //11x5 len:String
  }))] : []
}

export const simpleCompress = (array,length,isDouble) => {
  //please view php file
  let iLenght = isDouble ? (length + 1)/3 : length
  let iLevel = length
  let aSets = array.map(_ => {
    let result = _.split(isDouble ? ' ' : '')
    return (isDouble ? result.map(num => +num < 10 ? num.replace('0','') : num) : result).join('|')
  }).sort((a,b) => a - b)
  let aNewSets = {}
  let sSet
  let aNumbs
  let sLastNum
  let sKey

  for (let i = 0;i < iLenght;i++) {
    aSets.forEach(sSet => {
      if(sSet) {
        aNumbs = sSet.split('|')
        if(aNumbs.length === iLenght) {
          sLastNum = aNumbs.pop()
          sKey = aNumbs.join('|')
          if(aNewSets[sKey]){
            aNewSets[sKey].push(sLastNum)
          }
          else {
            aNewSets[sKey] = [sLastNum];
        }
        }
      }
    })
    aSets = []
    for (var key in aNewSets) {
      if (aNewSets.hasOwnProperty(key)) {
        aSets.push(aNewSets[key].join(',') + '|' + key)
      }
    }
    aNewSets = []
  }

  return aSets.join(';')
}

// export const myWorker = operative({
//   simpleCompress
// });
//util/lotto/simpleUnCompress.php
const addZero = (num,isDouble) => isDouble && num < 10 ? `0${num}` : num

export const simpleUnCompress = (str,isDouble) => {
  let aResult = []
  let aSets = str.split(';')
  let aSubSets
  let aNums
  let aTempA
  let aTempB
  aSets.forEach(sSet => {
    aNums = sSet.split('|').map(_ => _.split(','))
    aTempA = []
    aNums.forEach(aValue => {
      aTempB = []
      aValue.forEach(value => {
        if(aTempA.length) {
          aTempA.forEach(value2 => {
            aTempB.push(addZero(value2,isDouble) + `${isDouble ? ' ' : ''}` + addZero(value,isDouble))
          })
        }else{
          aTempB.push(value)
        }
      })
      aTempA = aTempB
    })
    aResult.push(aTempA)
  })
  return aResult.join(';')
}

