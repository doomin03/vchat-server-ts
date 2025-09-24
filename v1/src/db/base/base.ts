// WHERE 절 연산자 모음
export enum WhereOp {
  EQ = "=",          // Equal
  NE = "!=",         // Not Equal
  GT = ">",          // Greater Than
  GTE = ">=",        // Greater Than or Equal
  LT = "<",          // Less Than
  LTE = "<=",        // Less Than or Equal
  LIKE = "LIKE",     // Pattern Matching
  IN = "IN",         // IN (...)
  BETWEEN = "BETWEEN", // Range
  IS_NULL = "IS NULL",   // Null Check
  IS_NOT_NULL = "IS NOT NULL", // Not Null Check
}


class Base {

    private whereArr:{op:string, col:string, value:any}[] = [];


    public where(op:WhereOp, col:string, value:any): this{
        this.whereArr.push(
            {
                op: op,
                col: col,
                value: value
            }
        )
        return this;
    }

    public whereOr(op:WhereOp, col:string, value:any):void{
        
    }
}