$path=$args[0]
$userList = New-Object System.Collections.Arraylist

function generateADPhotos($path){
    $list=GET-ADuser -filter * -properties thumbnailphoto
    Foreach ($User in $list){
        If ($User.thumbnailphoto) {
            $Filename=$path+$User.samaccountname+'.jpg'
            [System.Io.File]::WriteAllBytes($Filename, $User.Thumbnailphoto)
            $userList.add($User.samaccountname) | Out-null
        }
    }
    Echo $userList | Out-String
}

generateADPhotos $path
