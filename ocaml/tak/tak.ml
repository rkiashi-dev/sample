let rec tak x y z = 
  if x <= y then z
  else
    tak (tak (x - 1) y z) (tak (y - 1) z x) (tak (z - 1) x y)

(* 時間計測 *)
let () = 
  let a = Sys.time () in
    ignore (tak 18 9 0);
    print_float (Sys.time () -. a)
