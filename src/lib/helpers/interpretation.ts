import type { BitData, ByteData } from "$lib/types";

export const updateBitData = ( 
  byteData: ByteData,
  bitData: BitData,
  index: number,
): ByteData => {
  const newData = [...byteData];
  newData[index] = bitData;
  return newData;
}

