function case_preview_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[204.0248272,-106.7227321],[197.6478691,-115.6078133]]).appendArc([198.1255434,-118.4122806],{"radius":2,"clockwise":false,"large":false}).appendPoint([211.5404362,-127.8054896]).appendArc([212.0315874,-130.5909466],{"radius":2,"clockwise":true,"large":false}).appendPoint([197.8068919,-150.9059173]).appendArc([195.0214349,-151.3970685],{"radius":2,"clockwise":true,"large":false}).appendPoint([174.444577,-136.9889974]).appendArc([174.3095485,-136.9023076],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.2687011,-110.475006]).appendArc([128.2565767,-110.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([91.2,-110.2]).appendArc([89.2,-108.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.2,-57.8]).appendArc([91.2,-55.8],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.7943472,-55.8]).appendArc([107.676122,-54.477439],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.523878,-52.122561]).appendArc([110.4056528,-50.8],{"radius":2,"clockwise":true,"large":false}).appendPoint([123.6492216,-50.8]).appendArc([125.5862075,-49.298082],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.6137925,-45.301918]).appendArc([128.5507784,-43.8],{"radius":2,"clockwise":true,"large":false}).appendPoint([143.5943472,-43.8]).appendArc([145.476122,-45.122561],{"radius":2,"clockwise":true,"large":false}).appendPoint([146.323878,-47.477439]).appendArc([148.2056528,-48.8],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.8676192,-48.8]).appendArc([163.582605,-49.7710084],{"radius":2,"clockwise":true,"large":false}).appendPoint([164.217395,-50.8289916]).appendArc([165.9323808,-51.8],{"radius":2,"clockwise":false,"large":false}).appendPoint([179.7958372,-51.8]).appendArc([181.563413,-52.8642246],{"radius":2,"clockwise":true,"large":false}).appendPoint([182.236587,-54.1357754]).appendArc([184.0041628,-55.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.4,-55.2]).appendArc([204.4,-57.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.4,-105.5565689]).appendArc([204.0248272,-106.7227321],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[165,-69],[179,-69]]).appendPoint([179,-55]).appendPoint([165,-55]).appendPoint([165,-69]).close().innerToCAG()
.union(
    new CSG.Path2D([[165,-86],[179,-86]]).appendPoint([179,-72]).appendPoint([165,-72]).appendPoint([165,-86]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-103],[179,-103]]).appendPoint([179,-89]).appendPoint([165,-89]).appendPoint([165,-103]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-66],[161,-66]]).appendPoint([161,-52]).appendPoint([147,-52]).appendPoint([147,-66]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-83],[161,-83]]).appendPoint([161,-69]).appendPoint([147,-69]).appendPoint([147,-83]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-100],[161,-100]]).appendPoint([161,-86]).appendPoint([147,-86]).appendPoint([147,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-61],[143,-61]]).appendPoint([143,-47]).appendPoint([129,-47]).appendPoint([129,-61]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-78],[143,-78]]).appendPoint([143,-64]).appendPoint([129,-64]).appendPoint([129,-78]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-95],[143,-95]]).appendPoint([143,-81]).appendPoint([129,-81]).appendPoint([129,-95]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-68],[125,-68]]).appendPoint([125,-54]).appendPoint([111,-54]).appendPoint([111,-68]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-85],[125,-85]]).appendPoint([125,-71]).appendPoint([111,-71]).appendPoint([111,-85]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-102],[125,-102]]).appendPoint([125,-88]).appendPoint([111,-88]).appendPoint([111,-102]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-73],[107,-73]]).appendPoint([107,-59]).appendPoint([93,-59]).appendPoint([93,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-90],[107,-90]]).appendPoint([107,-76]).appendPoint([93,-76]).appendPoint([93,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-107],[107,-107]]).appendPoint([107,-93]).appendPoint([93,-93]).appendPoint([93,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[154.4267859,-118.9497475],[167.9497475,-122.5732141]]).appendPoint([171.5732141,-109.0502525]).appendPoint([158.0502525,-105.4267859]).appendPoint([154.4267859,-118.9497475]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.2829181,-144.6470517],[206.3129882,-133.178923]]).appendPoint([194.8448595,-125.1488529]).appendPoint([186.8147894,-136.6169816]).appendPoint([198.2829181,-144.6470517]).close().innerToCAG()
).union(
    new CSG.Path2D([[184.3573334,-134.8962523],[192.3874035,-123.4281236]]).appendPoint([180.9192748,-115.3980535]).appendPoint([172.8892047,-126.8661822]).appendPoint([184.3573334,-134.8962523]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = case_preview_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        