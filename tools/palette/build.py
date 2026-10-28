import json
def mix(a,b,t):  # t of b into a
    a=[int(a[i:i+2],16) for i in (1,3,5)]; b=[int(b[i:i+2],16) for i in (1,3,5)]
    return '#'+''.join('%02X'%round(x+(y-x)*t) for x,y in zip(a,b))
def ramp(p):  # DS mix ratios, read off the signed-off KM ramp (Aug 2026)
    W,K='#FFFFFF','#000000'
    return {'Neutral':mix(p,W,.88),'Neutral Pressed':mix(p,W,.80),'Light 4':mix(p,W,.75),'Light 3':mix(p,W,.60),'Light 2':mix(p,W,.45),'Light 1':mix(p,W,.25),
            'Dark 1':mix(p,K,.20),'Dark 2':mix(p,K,.40),'Dark 3':mix(p,K,.60),'Primary Dark':mix(p,K,.80)}
MONO={'Neutral':'#F2F2F2','Neutral Pressed':'#E7E7E7','Light 4':'#D6D6D6','Light 3':'#B5B5B5','Light 2':'#808080','Light 1':'#4D4D4D','Dark 1':'#000000','Dark 2':'#000000','Dark 3':'#000000','Primary Dark':'#000000'}
EXT={'Red':'#C90000','Red Light':'#FFF2F2','Yellow':'#FFD600','Yellow Light':'#FFFBE6','Green':'#70C474','Green Light':'#EAF6EA','System Cursor':'#2797FF','Pay+ Primary':'#003B61'}
MONOP={'White':'#FFFFFF','Background White':'#FFFFFF','Grey 05':'#FAFAFA','Grey 1':'#F2F2F2','Grey 2':'#E7E7E7','Grey 25':'#D6D6D6','Grey 3':'#B5B5B5','Grey 4':'#767676','Grey 5':'#6B6B6B','Grey 6':'#323232','Soft Black':'#242424','Black':'#000000'}
B={}
def brand(key,name,primary,cta,shades,src,accents=None,mono=None,primaryName='Primary',ctaName='CTA',neutralName='Neutral'):
    B[key]=dict(name=name,src=src,primaryName=primaryName,ctaName=ctaName,neutralName=neutralName,
      primary={'Primary':primary,'CTA':cta},shades=dict(shades),accents=accents or {},extended=dict(EXT),mono={**MONOP,**(mono or {})})
brand('debenhams','Debenhams','#7BE7D8','#00787D',{'Neutral':'#E8F4F2','Neutral Pressed':'#D7EBE8','Light 4':'#E6FFFC','Light 3':'#D6FFF9','Light 2':'#B8FDF4','Light 1':'#9DEDE2','Dark 1':'#76DECF','Dark 2':'#70BEB3','Dark 3':'#529C92','Primary Dark':'#00565A'},'signed off · Aug 2026',primaryName='Aqua',ctaName='CTA Aqua',neutralName='Aqua Neutral')
brand('boohoo','boohoo','#000000','#000000',MONO,'signed off · Aug 2026 (pink removed)')
brand('boohooman','boohooMAN','#000000','#000000',MONO,'signed off · Aug 2026',accents={'Aggressive Green (MAN)':'#01FE8A'})
brand('plt','PrettyLittleThing','#550503','#550503',{'Neutral':'#F3EAE8','Neutral Pressed':'#E5D4D1','Light 4':'#FCF0EE','Light 3':'#FFD5CD','Light 2':'#EAAFA4','Light 1':'#C77E75','Dark 1':'#450603','Dark 2':'#360502','Dark 3':'#270401','Primary Dark':'#1E0301'},'signed off · Aug 2026',
      accents={'Warm Peach (PLT)':'#F1C59E','Light Cream (PLT)':'#FFE4D2'},mono={'Background White':'#FFFDF7','Grey 05':'#FAF5E7'},primaryName='Garnet',ctaName='CTA Garnet',neutralName='Garnet Neutral')
brand('karenmillen','Karen Millen','#D24508','#000000',{'Neutral':'#FAE9E1','Neutral Pressed':'#F6DACE','Light 4':'#F4D1C1','Light 3':'#EDB59C','Light 2':'#E69977','Light 1':'#DD7446','Dark 1':'#A83706','Dark 2':'#7E2905','Dark 3':'#541C03','Primary Dark':'#2A0E02'},'signed off · KM review Aug 2026')
brand('warehouse','Warehouse','#0A0A0A','#000000',MONO,'from code · mono like boohoo / MAN — to sign off')
brand('brandroom','The Brand Room','#0A0A0A','#000000',MONO,'from code · mono like boohoo / MAN — to sign off')
r=ramp('#284D7B'); r.update({'Neutral':'#E2EAF4'})
brand('burton','Burton','#284D7B','#284D7B',r,'from code (live navy, 23 Oct) · ramp derived with the DS mix ratios — to sign off')
r=ramp('#444444'); r.update({'Neutral':'#FBF6F0','Neutral Pressed':mix('#FBF6F0','#444444',.08)})
brand('principles','Principles','#444444','#444444',r,'from code · ramp derived with the DS mix ratios — to sign off')
m=dict(MONO); m.update({'Neutral':'#E2E0DC','Neutral Pressed':mix('#E2E0DC','#000000',.08)})
brand('coast','Coast','#000000','#000000',m,'from code · mono, sand neutral — to sign off')
json.dump(B,open(__import__('os').path.join(__import__('os').path.dirname(__file__),'palette.json'),'w'),indent=1)
for k,v in B.items(): print(k, v['primary'], {x:v['shades'][x] for x in ('Neutral','Neutral Pressed','Light 1','Dark 3','Primary Dark')})
