let index = 0;
let list = [ArrowNames.North,ArrowNames.NorthEast,ArrowNames.East,ArrowNames.SouthEast,
ArrowNames.South,ArrowNames.SouthWest,ArrowNames.West,ArrowNames.NorthWest];
let map = [ArrowNames.North,ArrowNames.South,ArrowNames.East,ArrowNames.West,ArrowNames.NorthEast];
    radio.setGroup(1);
radio.onReceivedString(function (rs: string) {
    let n = parseInt(rs.slice(1));
        if(rs[0] =='d'){//目的地番号の場合
            for(let i = 0;i < 8;i++){
            if(map[n] == list[i]){//正しい矢印がlistのどこに載ってるかを探す
                radio.sendString("i"+i.toString());//iを文字列に変換しidをつけて送信
                index = i;
            }
        }
        if(rs[0]=='d'){//方角の場合
            let cd = (n+45*index)%360;//目的地の方向を計算
            let cd1 = cd.toString();//文字列に変換
            radio.sendString("d"+cd1);//idをつけて送信
        }
        
    }
})