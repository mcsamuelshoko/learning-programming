//* Understanding a mapped type
/**
* A mapped type is the process of creating a new type 
* by mapping type information from an existing type.

** type MappedTypeName = {[K in UnionType]: ExistingType}


* This becomes more useful when used with the keyof 
* operator we learned about in the last lesson:

      type MappedTypeName = {
        [K in keyof ExistingType1]: ExistingType2;
      };
* This creates a new type containing the keys from 
* another type.
*/